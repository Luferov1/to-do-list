import React from 'react';
import styles from './style.module.scss';
import { useAppSelector } from '../../../hooks';
import TagsContainer from '../../Containers/TagsContainer';
import { IndexOnly } from '../../../interfaces';
import EditToDoButton from '../../Buttons/EditToDoButton';
import DeleteToDoButton from '../../Buttons/DeleteToDoButton';

const ToDoItemView = ({ index }: IndexOnly) => {
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const { header, text } = todos[index];
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.text}>{text}</p>
      <TagsContainer activeTags={null} index={index} isNew={false} onClick={undefined} />
      <EditToDoButton index={index} />
      <DeleteToDoButton index={index} />
    </div>
  );
};

export default ToDoItemView;
