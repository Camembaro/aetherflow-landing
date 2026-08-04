/**
 * Server-only: reads cookies / accept-language headers.
 * NEVER import this from a "use client" file.
 */
import { cookies, headers } from "next/headers";
import { LANGS, DICTIONARIES, t } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/lang";

export async function getRequestLang(): Promise<Lang> {
  try {
    const cookieStore = await cookies();
    const c = cookieStore.get("aetherflow-lang")?.value;
    if (c && (LANGS as readonly string[]).includes(c)) return c as Lang;
    const h = await headers();
    const accept = h.get("accept-language") || "";
    const primary = accept.split(",")[0]?.toLowerCase() ?? "";
    for (const code of LANGS) if (primary.startsWith(code)) return code;
  } catch {
    /* no cookie jar */
  }
  return "es";
}

export { DICTIONARIES, t, LANGS };
