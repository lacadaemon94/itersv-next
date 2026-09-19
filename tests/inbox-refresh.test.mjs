import assert from "node:assert/strict";
import { test } from "node:test";
import { setImmediate } from "node:timers/promises";
import { startInboxRefresh } from "../src/lib/inbox-refresh.ts";
import { hasOpenWhatsAppWindow } from "../src/lib/whatsapp-window.ts";

test("refreshes messages and delivery state without overlapping reads", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const seen = [];
  let calls = 0;
  let resolve;
  const poller = startInboxRefresh({
    load: () => { calls++; return new Promise((done) => { resolve = done; }); },
    onData: (data) => seen.push(data),
    onError: () => assert.fail("Unexpected failure"),
    isVisible: () => true,
  });
  t.after(() => poller.stop());
  await poller.refresh();
  assert.equal(calls, 1);
  resolve({ messages: [{ id: "one", status: "queued" }] });
  await setImmediate();
  t.mock.timers.tick(5000);
  assert.equal(calls, 2);
  resolve({ messages: [{ id: "one", status: "delivered" }, { id: "two" }] });
  await setImmediate();
  assert.equal(seen[1].messages[0].status, "delivered");
  assert.equal(seen[1].messages.length, 2);
});

test("hidden tab pauses reads; returning resumes them", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let visible = false;
  let calls = 0;
  const poller = startInboxRefresh({
    load: async () => ++calls,
    onData: () => {}, onError: () => {}, isVisible: () => visible,
  });
  t.after(() => poller.stop());
  t.mock.timers.tick(20000);
  assert.equal(calls, 0);
  visible = true;
  await poller.refresh();
  assert.equal(calls, 1);
  visible = false;
  t.mock.timers.tick(5000);
  assert.equal(calls, 1);
});

test("cleanup aborts in-flight reads and ignores late results", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let resolve;
  let signal;
  const poller = startInboxRefresh({
    load: (nextSignal) => {
      signal = nextSignal;
      return new Promise((done) => { resolve = done; });
    },
    onData: () => assert.fail("Stale result applied"),
    onError: () => assert.fail("Cleanup reported as an error"),
    isVisible: () => true,
  });
  poller.stop();
  assert.equal(signal.aborted, true);
  resolve({ oldConversation: true });
  await setImmediate();
  t.mock.timers.tick(20000);
});

test("failed reads retry and recover without clearing existing data", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let calls = 0;
  let errors = 0;
  const seen = ["existing"];
  const poller = startInboxRefresh({
    load: async () => { if (++calls === 1) throw new Error("Offline"); return "fresh"; },
    onData: (value) => seen.push(value),
    onError: () => errors++, isVisible: () => true,
  });
  t.after(() => poller.stop());
  await setImmediate();
  assert.equal(errors, 1);
  assert.deepEqual(seen, ["existing"]);
  t.mock.timers.tick(5000);
  await setImmediate();
  assert.deepEqual(seen, ["existing", "fresh"]);
});

test("hung fetch is aborted at its deadline and can retry", async (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let calls = 0;
  let errors = 0;
  const poller = startInboxRefresh({
    load: (signal) => {
      calls++;
      return new Promise((_, reject) => signal.addEventListener("abort", () => reject(new Error("Aborted"))));
    },
    onData: () => assert.fail("Unexpected data"),
    onError: () => errors++, isVisible: () => true,
  });
  t.after(() => poller.stop());
  t.mock.timers.tick(10000);
  await setImmediate();
  assert.equal(errors, 1);
  t.mock.timers.tick(5000);
  assert.equal(calls, 2);
});

test("reply window rejects unknown, invalid, future and expired timestamps", () => {
  const now = Date.parse("2026-09-19T21:00:00Z");
  for (const value of [null, undefined, "", "bad", "2026-09-20T21:00:00Z", "2026-09-18T21:00:00Z"]) {
    assert.equal(hasOpenWhatsAppWindow(value, now), false);
  }
  assert.equal(hasOpenWhatsAppWindow("2026-09-19T20:59:00Z", now), true);
});
