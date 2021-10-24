import React from 'react';
import { ForcastResourceDayForcast } from '../../../api/types';
import { useDayForcast } from '../use-day-forcast';
import styles from './day-forcast-card.module.scss';

export function DayForcastCard({forcast, unit}: DayForcastCardProps) {

  const data = useDayForcast(forcast, unit);

  return (
    <article
      className={styles.day}
    >
      <span className={styles.title}>{data.shortDayName}</span>
      <div className={styles.card}>
        <div className={styles.icon}><img src={data.iconUrl} alt={data.phrase} title={data.phrase} /></div>
        <div className={styles.temperature}>{data.averageTemperature}&#176;</div>
      </div>
    </article>
  );
}

interface DayForcastCardProps {
  forcast: ForcastResourceDayForcast;
  unit?: 'F' | 'C';
}