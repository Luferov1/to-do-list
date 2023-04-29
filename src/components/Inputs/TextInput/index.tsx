import React, { forwardRef } from 'react';
import styles from './style.module.scss';
import { InputInterface } from '../../../interfaces';

const TextInput = forwardRef<HTMLTextAreaElement, InputInterface>(({ params }, ref) => (
  <textarea
    className={styles.text}
    name={params.name}
    ref={ref}
    onBlur={params.onBlur}
    onChange={params.onChange}
  />
));

export default TextInput;
