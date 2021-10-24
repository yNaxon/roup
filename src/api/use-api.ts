import useSWR, { SWRConfiguration } from "swr";

export function useApi<Data = any, Error = any>(
  path: string | null,
  swrConfig?: SWRConfiguration
) {
  const response = useSWR<Data, Error>(path || null, fetcher, swrConfig);
  const loading = !response.data && !response.error;

  return {
    ...response,
    loading
  }
}

async function fetcher(key: string | string[]) {
  const path = Array.isArray(key)
    ? `/${key.join('/')}`
    : `/${key}`;

  const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`);

  if (!response.ok) {
    const info = await response.json();
    const status = response.status
    throw new ApiError(info.error, status, info);
  }

  return response.json().then(response => response.data);
}

class ApiError extends Error {
  readonly info: any;
  readonly status: number;
  constructor(message: string, status: number, info: any) {
    super(message);
    this.status = status;
    this.info = info;
  }
}