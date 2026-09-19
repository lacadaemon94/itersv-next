/** Refresh through the authenticated inbox API without overlapping requests. */
export function startInboxRefresh<T>({
  load,
  onData,
  onError,
  isVisible,
  intervalMs = 5000,
  timeoutMs = 10000,
}: {
  load: (signal: AbortSignal) => Promise<T>;
  onData: (data: T) => void;
  onError: () => void;
  isVisible: () => boolean;
  intervalMs?: number;
  timeoutMs?: number;
}) {
  let stopped = false;
  let active: AbortController | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;

  async function refresh() {
    if (stopped || active) return;
    clearTimeout(timer);
    if (!isVisible()) return;
    const controller = new AbortController();
    active = controller;
    const deadline = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const data = await load(controller.signal);
      if (!stopped && !controller.signal.aborted) onData(data);
    } catch {
      if (!stopped) onError();
    } finally {
      clearTimeout(deadline);
      active = null;
      if (!stopped) timer = setTimeout(() => void refresh(), intervalMs);
    }
  }

  void refresh();
  return {
    refresh,
    stop() {
      stopped = true;
      clearTimeout(timer);
      active?.abort();
    },
  };
}
