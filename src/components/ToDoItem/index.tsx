import React from 'react';
import ToDoItemEdit from './ToDoItemEdit';
import ToDoItemView from './ToDoItemView';
import { useAppSelector } from '../../hooks';

interface Props {
  index: number,
}

const ToDoItem = ({
  index,
}: Props) => {
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
