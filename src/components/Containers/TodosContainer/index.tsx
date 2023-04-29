import React, { useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { createUniqueID, filterTodos } from '../../../functions';
import ToDoItem from '../../ToDoItem';

const TodosContainer = () => {
  const { tags, todos } = useAppSelector((state) => state.mainPageReducer);
  const [isAddingNew] = useState(false);
  return (
    <>
      {filterTodos(tags, todos, isAddingNew).map((item, index) => (
        <ToDoItem
          index={todos.indexOf(item)}
          key={createUniqueID(todos[index].header)}
        />
      ))}
    </>
  );
};

export default TodosContainer;
