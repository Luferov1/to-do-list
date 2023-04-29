import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';

const AddNewToDoButton = () => {
  const dispatch = useAppDispatch();
  const { toggleIsNewEditing, setEditing } = mainPageSlice.actions;
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(toggleIsNewEditing(true));
        dispatch(setEditing(-1));
      }}
    >
      Add new
    </button>
  );
};

export default AddNewToDoButton;
