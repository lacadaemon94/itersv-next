import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

function getSupabaseUrl() {
  return process.env.PRIVATE_SUPABASE_URL;
}

function getSupabaseAnonKey() {
  return process.env.PRIVATE_SUPABASE_ANON_KEY;
}

function getAuthCookieDomain() {
  if (process.env.PRIVATE_AUTH_COOKIE_DOMAIN) {
    return process.env.PRIVATE_AUTH_COOKIE_DOMAIN;
  }

  const configuredUrls = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ].filter(Boolean);

  const usesIterDomain = configuredUrls.some((value) => {
    try {
      const url = value?.startsWith("http")
        ? new URL(value)
        : new URL(`https://${value}`);

      return url.hostname === "itersv.com" || url.hostname === "www.itersv.com";
    } catch {
      return false;
    }
  });

  return usesIterDomain ? ".itersv.com" : undefined;
}

export async function createClient() {
  const cookieStore = await cookies();
  const url = getSupabaseUrl();
  const publishableKey = getSupabaseAnonKey();
  const authCookieDomain = getAuthCookieDomain();

  if (!url || !publishableKey) {
    throw new Error(
      "Missing PRIVATE_SUPABASE_URL or PRIVATE_SUPABASE_ANON_KEY.",
    );
  }

  return createServerClient(url, publishableKey, {
    cookieOptions: authCookieDomain ? { domain: authCookieDomain } : undefined,
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
