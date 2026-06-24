import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

function getSupabaseUrl() {
  return process.env.PRIVATE_SUPABASE_URL;
}

function getSupabaseAnonKey() {
  return process.env.PRIVATE_SUPABASE_ANON_KEY;
}

export async function createClient() {
  const cookieStore = await cookies();
  const url = getSupabaseUrl();
  const publishableKey = getSupabaseAnonKey();

  if (!url || !publishableKey) {
    throw new Error(
      "Missing PRIVATE_SUPABASE_URL or PRIVATE_SUPABASE_ANON_KEY.",
    );
  }

  return createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Components can read auth cookies before Proxy/auth wiring is added.
        }
      },
    },
  });
}

export function createServiceClient() {
  const url = getSupabaseUrl();
  const serviceRoleKey =
    process.env.PRIVATE_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing PRIVATE_SUPABASE_URL or PRIVATE_SUPABASE_SERVICE_ROLE_KEY.");
  }

  return createSupabaseClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
