import React from 'react';
import styles from './style.module.scss';
import { IndexOnly } from '../../../interfaces';
import { useAppDispatch } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';

const EditToDoButton = ({ index }: IndexOnly) => {
  const dispatch = useAppDispatch();
  const { setEditing, toggleIsNewEditing } = mainPageSlice.actions;
  return (
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
  );
};

export default EditToDoButton;
