import { useApi } from "./use-api";
import { LocationResource } from "./types";

export function useLocations(search?: string) {
  const { data, error } = useApi<LocationResource[]>(search ? `search?search=${search}` : null);

  return {
    locations: data,
    error,
  }
}