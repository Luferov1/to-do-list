import React from 'react';
import styles from './style.module.scss';
import TagButton from '../../Buttons/TagButton';
import { useAppSelector } from '../../../hooks';

const TagButtonsContainer = () => {
  const { tags } = useAppSelector((state) => state.mainPageReducer);
  return (
    <div className={styles.tagsContainer}>
      {tags.map((item, index) => (
        <TagButton
          index={index}
          key={String(item.name)}
        />
      ))}
    </div>
  );
};

export default TagButtonsContainer;
