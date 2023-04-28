import React from 'react';
import styles from './style.module.scss';
import NewToDoItem from '../newToDoItem';
import TodosContainer from '../TodosContainer';

const Article = () => (
  <article className={styles.article}>
    <NewToDoItem />
    <TodosContainer />
  </article>
);

export default Article;
