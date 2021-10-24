import { useApi } from "./use-api";
import { LocationResource } from "./types";

export function useLocation(id: string) {
  const { data, error, loading, ...response } = useApi<LocationResource>(id);

  return {
    ...response,
    location: data,
    loading,
    error,
  }
}