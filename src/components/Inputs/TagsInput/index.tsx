import React, { forwardRef } from 'react';
import styles from './style.module.scss';
import { InputInterface } from '../../../interfaces';

const TagsInput = forwardRef<HTMLInputElement, InputInterface>(({ params }, ref) => (
  <input
    className={styles.tagsInput}
    name={params.name}
    type="text"
    ref={ref}
    onChange={params.onChange}
    onBlur={params.onBlur}
  />
));

export default TagsInput;
