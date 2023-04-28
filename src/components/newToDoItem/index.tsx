import React from 'react';
import styles from './style.module.scss';
import ToDoItemEdit from '../ToDoItem/ToDoItemEdit';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { mainPageSlice } from '../../store/reducers/mainPageSlice';

const NewToDoItem = () => {
  const dispatch = useAppDispatch();
  const { todos, isNewToDoEditing } = useAppSelector((state) => state.mainPageReducer);
  const { toggleIsNewEditing, setEditing } = mainPageSlice.actions;
  const index = todos.length;
  return (
    <div className={isNewToDoEditing ? styles.container_editing : styles.container}>

      {isNewToDoEditing
        ? (
          <>
            <button
              type="button"
              onClick={() => dispatch(toggleIsNewEditing(false))}
            >
              cancel
            </button>
            <ToDoItemEdit
              index={index}
              isNew
            />
          </>
        )
        : (
          <button
            type="button"
            onClick={() => {
              dispatch(toggleIsNewEditing(true));
              dispatch(setEditing(-1));
            }}
          >
            create new TODO
          </button>
        )}
    </div>
  );
};

export default NewToDoItem;
