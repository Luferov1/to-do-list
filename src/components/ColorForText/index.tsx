import React from 'react';
import styles from './style.module.scss';
import { createUniqueID } from '../../functions';
import { useAppSelector } from '../../hooks';

interface Props {
  index: number,
  text: string
}
const ColorForText = ({ text, index }: Props) => {
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  return (
    <div className={styles.colorForText}>
      {text.split(' ').map((item) => (
        <span
          className={
            todos[index].activeTags.includes(item)
              ? styles.coloredSpan
              : undefined
          }
          key={createUniqueID(item)}
        >
          {`${item} \u0020`}
        </span>
      ))}
    </div>
  );
};

export default ColorForText;
