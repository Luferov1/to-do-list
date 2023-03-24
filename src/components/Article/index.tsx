import React from 'react';
import styles from './style.module.scss';
import { IArticleProps } from '../../interfaces';
import ToDoItem from '../ToDoItem';
import NewToDoItem from '../newToDoItem';

const Article = ({
  data, tagsData, setData, setTags,
}: IArticleProps) => (
  <article className={styles.article}>
    <NewToDoItem
      data={data}
      setData={setData}
      setTags={setTags}
      index={data.length}
    />
    {data.filter(({ tags }) => {
      const allowedTags = tagsData.filter(({ isActive }) => isActive).map((item) => item.name);
      return tags.some((item) => allowedTags.includes(item));
    }).map((item, index) => (
      <ToDoItem
        data={data}
        setData={setData}
        setTags={setTags}
        index={data.indexOf(item)}
        key={data[index].header}
      />
    ))}
  </article>
);

export default Article;
