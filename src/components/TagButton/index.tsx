import React from 'react';
import { ITagState } from '../../interfaces';
import styles from './style.module.scss';

interface Props {
  state: ITagState[],
  setState: React.Dispatch<React.SetStateAction<ITagState[]>>
  index: number
}

const TagButton = ({ state, setState, index }: Props) => (
  <button
    type="button"
    className={state[index].isActive ? styles.tagButton_active : styles.tagButton_disabled}
    onClick={() => {
      const newState = [...state];
      newState[index] = {
        ...newState[index],
        isActive: !newState[index].isActive,
      };
      setState(newState);
    }}
  >
    {String(state[index].name)}
  </button>
);

export default TagButton;
