import React from 'react';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';
import { IndexOnly } from '../../../interfaces';

const TagButton = ({ index }: IndexOnly) => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.mainPageReducer);
  const { changeTagState } = mainPageSlice.actions;
  return (
    <button
      type="button"
      className={tags[index].isActive ? styles.tagButton_active : styles.tagButton_disabled}
      onClick={() => {
        dispatch(changeTagState(index));
      }}
    >
      {String(tags[index].name)}
    </button>
  );
};

export default TagButton;
