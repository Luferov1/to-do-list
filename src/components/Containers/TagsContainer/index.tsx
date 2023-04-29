import React from 'react';
import styles from './style.module.scss';
import Tag from './Tag';
import { createUniqueID } from '../../../functions';
import { useAppSelector } from '../../../hooks';

interface Props {
  index: number,
  isNew: boolean,
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined,
  activeTags: string[] | null,
}

const TagsContainer = ({
  index, isNew, onClick, activeTags,
}: Props) => {
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const tags = activeTags || todos[index].activeTags;
  return (
    <div className={styles.tags}>
      {tags.map((item) => (
        <Tag
          key={createUniqueID(item)}
          text={item}
          index={index}
          isNew={isNew}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default TagsContainer;
