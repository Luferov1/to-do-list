import React, { useState } from 'react';
import ToDoItemEdit from './ToDoItemEdit';
import ToDoItemView from './ToDoItemView';
import { IToDoItemProps } from '../../interfaces';

const ToDoItem = ({
  data, index, setData, setTags,
}: IToDoItemProps) => {
  const [isEditing, setEditing] = useState(false);
  return (
    isEditing
      ? (
        <ToDoItemEdit
          data={data}
          setData={setData}
          setTags={setTags}
          index={index}
          setEditing={setEditing}
          isNew={false}
          isEditing={isEditing}
        />
      )
      : (
        <ToDoItemView
          data={data}
          setData={setData}
          setTags={setTags}
          index={index}
          setEditing={setEditing}
          isEditing={isEditing}
        />
      )
  );
};

export default ToDoItem;
