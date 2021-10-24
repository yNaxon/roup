export interface ForcastResource {
  locationId: string;
  forcast: ForcastResourceDayForcast[]
}

export interface ForcastResourceDayForcast {
  date: string;
  min: number;
  max: number;
  dayIcon: number;
  dayPhrase: string;
  nightIcon: number;
  nightPhrase: string;
  temperatureUnit: 'F';
}

export interface LocationResource {
  id: string;
  name: string;
  countryName: string;
}