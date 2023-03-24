import React, { useState } from 'react';
import styles from './style.module.scss';
import ToDoItemEdit from '../ToDoItem/ToDoItemEdit';
import { IToDoItemProps } from '../../interfaces';

const NewToDoItem = ({
  data, index, setData, setTags,
}: IToDoItemProps) => {
  const [isEditing, setEditing] = useState(false);
  return (
    <div className={isEditing ? styles.container_editing : styles.container}>

      {isEditing
        ? (
          <>
            <button
              type="button"
              onClick={() => setEditing(false)}
            >
              cancel
            </button>
            <ToDoItemEdit
              data={data}
              index={index}
              setEditing={setEditing}
              setTags={setTags}
              setData={setData}
              isNew
              isEditing
            />
          </>
        )
        : (
          <button
            type="button"
            onClick={() => setEditing(true)}
          >
            create new TODO
          </button>
        )}
    </div>
  );
};

export default NewToDoItem;
