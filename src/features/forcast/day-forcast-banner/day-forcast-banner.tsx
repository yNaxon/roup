import React from 'react';
import { ForcastResourceDayForcast } from '../../../api/types';
import { useDayForcast } from '../use-day-forcast';
import styles from './day-forcast-banner.module.scss';

export function DayForcastBanner({forcast, unit}: DayForcastBannerProps) {

  const data = useDayForcast(forcast, unit)

  return (
    <section className={styles.today}>
      <div className={styles.icon}>
        <img src={data.iconUrl} alt={data.phrase} title={data.phrase} />
      </div>
      <div className={styles.details}>
        <span className={styles.overline}>
          Today
        </span>
        <span className={styles.maxTemperature}>
          {data.max}&#176;
        </span>
        <span className={styles.minTemperature}>
          minimum: {data.min}
        </span>
      </div>
    </section>
  );
}

interface DayForcastBannerProps {
  forcast: ForcastResourceDayForcast;
  unit?: 'F' | 'C';
}

