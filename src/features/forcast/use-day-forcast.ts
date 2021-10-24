import { ForcastResourceDayForcast } from "../../api/types";
import { TemperatureUnitType } from "../../types";

export function useDayForcast(forcast: ForcastResourceDayForcast, unit: TemperatureUnitType = 'F') {
  const date = new Date(forcast.date);
  const night =  new Date().getHours() > 18;
  const iconNumber = night ? forcast.nightIcon : forcast.dayIcon;

  const shortDayName = date.toLocaleDateString('en-US', { weekday: 'short' });
  const phrase = night ? forcast.nightPhrase : forcast.dayPhrase
  const iconUrl = [
    'https://developer.accuweather.com/sites/default/files',
    `${iconNumber < 10 ? `0` : ''}${iconNumber}-s.png`
  ].join('/');
  
  const calculateMin = converters[forcast.temperatureUnit][unit];
  const calculateMax = converters[forcast.temperatureUnit][unit];
  
  const min = Math.round(calculateMin(forcast.min));
  const max = Math.round(calculateMax(forcast.max));
  const averageTemperature = Math.round((max + min) / 2);

  return {
    ...forcast,
    min,
    max,
    shortDayName,
    phrase,
    iconUrl,
    averageTemperature
  }
}

const converters = {
  C: {
    F: (value: number) => value * 9 / 5 + 32,
    C: (value: number) => value
  },
  F: {
    C: (value: number) => (value - 32) * 5 / 9,
    F: (value: number) => value,
  }
}