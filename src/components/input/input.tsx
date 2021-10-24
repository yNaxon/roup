import React, { InputHTMLAttributes } from 'react';
import { Input as ReakitInput } from 'reakit';
import classNames from 'classnames';
import styles from './input.module.scss';

export function Input({className, ...props}: InputHTMLAttributes<HTMLInputElement>) {
  return <ReakitInput className={classNames(styles.input, className)} {...props} />
}