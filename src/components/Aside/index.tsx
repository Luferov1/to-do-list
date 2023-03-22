import React from 'react';
import styles from './style.module.scss';
import { ITagState } from '../../interfaces';
import TagButton from '../ToDoItemEdit/TagButton';

interface Props {
  state: ITagState[]
  setState: React.Dispatch<React.SetStateAction<ITagState[]>>
}

const Aside = ({ state, setState }: Props) => (
  <aside className={styles.aside}>
    <h2 className={styles.header}>created by Luferov1</h2>
    <h3 className={styles.subHeader}>Filter by tags</h3>
    <div className={styles.tagsContainer}>
      {state.map((item, index) => (
        <TagButton
          state={state}
          setState={setState}
          index={index}
          key={String(item.name)}
        />
      ))}
    </div>
  </aside>
);

export default Aside;
