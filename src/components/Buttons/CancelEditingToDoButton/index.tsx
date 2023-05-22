import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';

interface Props {
  index: number,
  isNew: boolean,
}
const CancelEditingToDoButton = ({ index, isNew }: Props) => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const { toggleIsNewEditing, setToDoState } = mainPageSlice.actions;
  return (
    <button
      className={styles.cancelButton}
      type="button"
      onClick={() => {
        if (isNew) {
          dispatch(toggleIsNewEditing(false));
        } else {
          dispatch(setToDoState({ ...todos[index], isEditing: false, index }));
        }
      }}
    >
      Cancel
    </button>
  );
};

export default CancelEditingToDoButton;
