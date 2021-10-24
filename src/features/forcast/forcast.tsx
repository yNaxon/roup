import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForcast } from '../../api/use-forcast';
import { useLocation } from '../../api/use-location';
import { Button } from '../../components/button/button';
import { DayForcastBanner } from './day-forcast-banner/day-forcast-banner';
import { DayForcastCard } from './day-forcast-card/day-forcast-card';
import { Input } from '../../components/input/input';
import styles from './forcast.module.scss';
import { Spinner } from '../../components/spinner/spinner';
import { useUnit } from './use-unit';
import { GeneralError } from '../../components/general-error/general-error';

export function Forcast() {

  const history = useHistory();
  const { locationId } = useParams<ForcastParams>();
  const { location, error: locationError } = useLocation(locationId);
  const { forcast, error: forcastError } = useForcast(locationId);
  const [unit, setUnit] = useUnit();

  const error = locationError || forcastError;
  const [today, ...nextDays] = forcast?.forcast || [];
  const inputValue = location
    ? `${location.name}, ${location.countryName}`
    : 'loading...';

  const handleClick = () => {
    history.push('/search');
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Input
          readOnly
          value={inputValue}
          className={styles.input}
          onClick={handleClick}
          onKeyDown={event => event.key === 'Enter' && handleClick()}
          placeholder="Enter city..."
        />
        <Button
          className={styles.unitButton}
          onClick={() => setUnit(prevUnit => prevUnit === 'F' ? 'C' : 'F')}
          dangerouslySetInnerHTML={{ __html: unit === 'F' ? '&#8457;' : '&#8451;' }}
        />
      </header>
      {
        error ? (
          <div className={styles.placeholder}>
            <GeneralError message={error.message} />
          </div>
        ) : today && nextDays ? (
          <>
            <DayForcastBanner
              forcast={today}
              unit={unit}
            />
            <section className={styles.nextDays}>
              {
                nextDays.map(day => (
                  <DayForcastCard
                    key={day.date}
                    forcast={day}
                    unit={unit}
                  />
                ))
              }
            </section>
          </>
        ) : (
          <div className={styles.placeholder}>
            <Spinner />
          </div>
        )
      }
    </div>
  );
}

interface ForcastParams {
  locationId: string;
}
