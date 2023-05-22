import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';

const CancelAddingNewToDoButton = () => {
  const dispatch = useAppDispatch();
  const { toggleIsNewEditing } = mainPageSlice.actions;
  return (
    <button
      type="button"
      onClick={() => dispatch(toggleIsNewEditing(false))}
    >
      Cancel new TODO
    </button>
  );
};

export default CancelAddingNewToDoButton;
