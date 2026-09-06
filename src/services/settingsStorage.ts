import type { StopMetadata } from "@/types";

const SETTINGS_COOKIE = "rozklad_settings";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // keep settings for a year

export const DEFAULT_POLL_INTERVAL = 20000; // 20 seconds

export interface PersistedSettings {
  stopsInUse: StopMetadata[];
  pollInterval: number;
  savedAt: string;
}

const readCookie = (name: string): string | null => {
  const entry = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));

  return entry ? decodeURIComponent(entry.slice(name.length + 1)) : null;
};

export const loadSettings = (): PersistedSettings | null => {
  try {
    const raw = readCookie(SETTINGS_COOKIE);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<PersistedSettings>;
    if (!Array.isArray(parsed.stopsInUse)) return null;

    return {
      stopsInUse: parsed.stopsInUse,
      pollInterval:
        typeof parsed.pollInterval === "number" && parsed.pollInterval > 0
          ? parsed.pollInterval
          : DEFAULT_POLL_INTERVAL,
      savedAt:
        typeof parsed.savedAt === "string"
          ? parsed.savedAt
          : new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error reading saved settings:", error);
    return null;
  }
};

// Returns the timestamp written alongside the settings.
export const saveSettings = (
  settings: Omit<PersistedSettings, "savedAt">,
): string => {
  const savedAt = new Date().toISOString();

  try {
    const payload = encodeURIComponent(
      JSON.stringify({ ...settings, savedAt }),
    );
    document.cookie = `${SETTINGS_COOKIE}=${payload}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
  } catch (error) {
    console.error("Error saving settings:", error);
  }

  return savedAt;
};

export const clearStoredSettings = () => {
  document.cookie = `${SETTINGS_COOKIE}=; path=/; max-age=0; SameSite=Lax`;

  try {
    window.localStorage.clear();
    window.sessionStorage.clear();
  } catch (error) {
    console.error("Error clearing browser storage:", error);
  }
};
