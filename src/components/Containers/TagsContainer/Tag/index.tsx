import React from 'react';
import styles from './style.module.scss';
import { useAppSelector } from '../../../../hooks';

interface Props {
  text: string,
  index: number,
  isNew: boolean,
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined,
}

const Tag = ({
  text, index, isNew, onClick,
}: Props) => {
  const { todos, isNewToDoEditing } = useAppSelector((state) => state.mainPageReducer);
  const isEditing = isNew ? isNewToDoEditing : todos[index].isEditing;
  return (
    <div className={styles.tag}>
      <span className={styles.text}>{text}</span>
      {isEditing && (
      <input
        className={styles.deleteButton}
        type="button"
        onClick={onClick}
      />
      )}
    </div>
  );
};

export default Tag;
