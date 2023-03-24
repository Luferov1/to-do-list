import React from 'react';
import styles from './style.module.scss';
import { IToDoItemViewNProps } from '../../../interfaces';
import createUniqueArrayOfTags from '../../../functions';
import Tag from '../../Tag';

const ToDoItemView = ({
  data, setData, setTags, index, setEditing, isEditing,
}: IToDoItemViewNProps) => {
  const {
    header, text, tags,
  } = data[index];
  const deleteItem = () => {
    const newData = data;
    newData.splice(index, 1);
    const newTagsData = createUniqueArrayOfTags(newData);
    setData(newData);
    setTags(newTagsData);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.tags}>
        {tags.map((item) => (
          <Tag
            key={`${item}${Math.random()}`}
            text={item}
            isEditing={isEditing}
            data={data}
            setData={setData}
            setTags={setTags}
            index={index}
            isNew={false}
          />
        ))}
      </div>
      <button
        type="button"
        className={styles.editButton}
        onClick={() => setEditing(true)}
      >
        Edit
      </button>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItemView;
