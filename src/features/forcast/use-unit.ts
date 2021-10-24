import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { TemperatureUnitType } from "../../types";

export function useUnit(cacheKey: string = 'temperatureUnit'): [TemperatureUnitType, Dispatch<SetStateAction<"F"|"C">>] {
  const initialValue = localStorage.getItem(cacheKey) as TemperatureUnitType || 'F';
  const [unit, setUnit] = useState<TemperatureUnitType>(initialValue);
  useEffect(() => {
    if(unit !== initialValue) {
      localStorage.setItem(cacheKey, unit);
    }
  }, [unit, cacheKey, initialValue]);

  return [unit, setUnit];
}