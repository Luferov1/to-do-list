import React from 'react';
import styles from './style.module.scss';
import ToDoItemEdit from '../ToDoItemEdit';
import { useAppSelector } from '../../../hooks';
import CancelAddingNewToDoButton from '../../Buttons/CancelAddingNewToDoButton';
import AddNewToDoButton from '../../Buttons/AddNewToDoButton';

const NewToDoItem = () => {
  const { todos, isNewToDoEditing } = useAppSelector((state) => state.mainPageReducer);
  const index = todos.length;
  return (
    <div className={isNewToDoEditing ? styles.container_editing : styles.container}>
      {isNewToDoEditing
        ? (
          <>
            <CancelAddingNewToDoButton />
            <ToDoItemEdit
              index={index}
              isNew
            />
          </>
        )
        : <AddNewToDoButton />}
    </div>
  );
};

export default NewToDoItem;
