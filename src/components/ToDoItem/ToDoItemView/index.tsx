import React from 'react';
import styles from './style.module.scss';
import Tag from '../../Tag';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';
import { createUniqueID } from '../../../functions';

interface Props {
  index: number,
}

const ToDoItemView = ({ index }: Props) => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const {
    setEditing, deleteToDo, refreshTags, toggleIsNewEditing,
  } = mainPageSlice.actions;
  const {
    header, text, activeTags,
  } = todos[index];
  const deleteItem = () => {
    dispatch(deleteToDo(index));
    dispatch(refreshTags());
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.tags}>
        {activeTags.map((item) => (
          <Tag
            key={createUniqueID(item)}
            text={item}
            index={index}
            isNew={false}
            onClick={undefined}
          />
        ))}
      </div>
      <button
        type="button"
        className={styles.editButton}
        onClick={() => {
          dispatch(setEditing(index));
          dispatch(toggleIsNewEditing(false));
        }}
      >
        Edit
      </button>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItemView;
