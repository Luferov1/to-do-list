import React from 'react';
import styles from './style.module.scss';
import { ITagState, IToDoData } from '../../interfaces';
import createUniqueArrayOfTags from '../../functions';

interface Props {
  data: IToDoData[],
  setData: React.Dispatch<React.SetStateAction<IToDoData[]>>,
  tagsData: ITagState[]
  setTags: React.Dispatch<React.SetStateAction<ITagState[]>>
  index: number
}

const ToDoItemView = ({
  data, tagsData, setData, setTags, index,
}: Props) => {
  const {
    header, text, tags, isEditing,
  } = data[index];
  console.log(tagsData, isEditing);
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
          <span
            key={`${item}${Math.random()}`}
            className={styles.tag}
          >
            {`${item} `}
          </span>
        ))}
      </div>
      <button type="button" className={styles.editButton}>Edit</button>
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
