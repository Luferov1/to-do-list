import React from 'react';
import { IndexOnly } from '../../../interfaces';
import styles from './style.module.scss';
import { useAppDispatch } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';

const DeleteToDoButton = ({ index }: IndexOnly) => {
  const dispatch = useAppDispatch();
  const { deleteToDo, refreshTags } = mainPageSlice.actions;
  return (
    <button
      type="button"
      className={styles.deleteButton}
      onClick={() => {
        dispatch(deleteToDo(index));
        dispatch(refreshTags());
      }}
    >
      Delete
    </button>
  );
};

export default DeleteToDoButton;
