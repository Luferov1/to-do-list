import React, { forwardRef } from 'react';
import styles from './style.module.scss';
import { InputInterface } from '../../../interfaces';

const HeaderInput = forwardRef<HTMLInputElement, InputInterface>(({ params }, ref) => (
  <input
    type="text"
    className={styles.headerInput}
    name={params.name}
    ref={ref}
    onChange={params.onChange}
    onBlur={params.onBlur}
  />
));

export default HeaderInput;
