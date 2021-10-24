import { ForcastResource } from "./types";
import { useApi } from "./use-api";

export function useForcast(location: string) {
  const { data, error } = useApi<ForcastResource>(`${location}/forcast`);

  return {
    forcast: data,
    error,
  }
}