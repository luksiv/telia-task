import { getBaseApiUrl } from "./getBaseApiUrl.ts";

export interface FetchSettings {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>;
  data?: unknown;
}

export interface ErrorResponse {
  message: string;
}

async function fetchApi<T>(
  method: string,
  fetchSettings: FetchSettings,
): Promise<T> {
  try {
    const url = new URL(fetchSettings.url, getBaseApiUrl());
    const searchParams = new URLSearchParams(
      fetchSettings.params ?? {},
    ).toString();

    const fullUrl = searchParams ? `${url}?${searchParams}` : url.toString();

    const result = await fetch(fullUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetchSettings.data),
    });

    return result.json();
  } catch (error) {
    throw {
      error: {
        message: error?.toString() ?? "Unknown error",
      },
    };
  }
}

export const request = {
  get: <T>(url: string, settings?: Partial<FetchSettings>) =>
    fetchApi<T>("GET", { url, ...settings }),
  post: <T>(
    url: string,
    data: unknown,
    settings?: Omit<Partial<FetchSettings>, "data">,
  ) => fetchApi<T>("POST", { url, data, ...settings }),
  patch: <T>(
    url: string,
    data: unknown,
    settings?: Omit<Partial<FetchSettings>, "data">,
  ) => fetchApi<T>("PATCH", { url, data, ...settings }),
  delete: <T>(url: string, settings?: Partial<FetchSettings>) =>
    fetchApi<T>("DELETE", { url, ...settings }),
};
