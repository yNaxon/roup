import React from 'react';
import styles from './general-error.module.scss';

export function GeneralError(props: GeneralErrorProps) {

  return (
    <div className={styles.error}>
      {props.message}
    </div>
  )
}

interface GeneralErrorProps {
  message: string;
}