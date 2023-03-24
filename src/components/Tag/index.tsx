import React, { useState } from 'react';
import { ITagState, IToDoView } from '../../interfaces';
import styles from './style.module.scss';
import createUniqueArrayOfTags from '../../functions';

interface Props {
  text: string,
  isEditing: boolean,
  data: IToDoView[],
  setData: React.Dispatch<React.SetStateAction<IToDoView[]>>,
  setTags: React.Dispatch<React.SetStateAction<ITagState[]>>,
  index: number
  isNew: boolean
}

const Tag = ({
  text, isEditing, setData, setTags, data, index, isNew,
}: Props) => {
  const [isError, setError] = useState(false);
  return (
    <div className={styles.tag}>
      <span className={styles.text}>{text}</span>
      {isEditing && !isNew
        ? (
          <input
            className={styles.deleteButton}
            type="button"
            onClick={() => {
              if (data[index].tags.length === 1) {
                setError(true);
                setTimeout(() => setError(false), 3000);
              } else {
                const indexOfTag = data[index].tags.indexOf(text);
                const newData = data;
                newData[index].tags.splice(indexOfTag, 1);
                setData(newData);
                setTags(createUniqueArrayOfTags(newData));
              }
            }}
          />
        )
        : null }
      {isError ? <span className={styles.error}>You must have at least 1 tag</span> : null}
    </div>
  );
};

export default Tag;
