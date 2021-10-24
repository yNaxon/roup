import React from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from '../../components/logo/logo';
import { Input } from '../../components/input/input';
import styles from './homepage.module.scss';

export function Homepage() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/search');
  }

  return (
    <div className={styles.page}>
      <main className={styles.content}>
        <Logo className={styles.logo} />
        <div className={styles.slogan}>
          weather everywhere. anywhere.
        </div>
        <Input
          readOnly
          className={styles.searchInput}
          onClick={handleClick}
          onKeyDown={event => event.key === 'Enter' && handleClick()}
          placeholder="Enter city..."
        />
      </main>
      <footer className={styles.credits}>
        data: <a href="https://accuweather.com" target="_blank" rel="noreferrer">AccuWeather</a>
      </footer>
    </div>
  );
}