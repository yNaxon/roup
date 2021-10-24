import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Button as ReakitButton } from 'reakit';
import styles from './button.module.scss';

export function Button({className, ...props}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <ReakitButton className={classNames(styles.button, className)} {...props} />
  )
}