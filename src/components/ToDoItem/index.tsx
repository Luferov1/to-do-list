import React from 'react';
import ToDoItemEdit from './ToDoItemEdit';
import ToDoItemView from './ToDoItemView';
import { useAppSelector } from '../../hooks';
import { IndexOnly } from '../../interfaces';

const ToDoItem = ({
  index,
}: IndexOnly) => {
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const { isEditing } = todos[index];
  return (
    isEditing
      ? (
        <ToDoItemEdit
          index={index}
          isNew={false}
        />
      )
      : (
        <ToDoItemView
          index={index}
        />
      )
  );
};

export default ToDoItem;
