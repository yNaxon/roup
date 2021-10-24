import React from 'react';
import classNames from 'classnames';
import styles from './logo.module.scss';

export function Logo({className}: LogoProps) {

  return (
    <div className={classNames(styles.logo, className)}>
      roup
    </div>
  )
}

export interface LogoProps {
  className?: string;
} 