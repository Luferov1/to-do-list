import React from 'react';
import styles from './style.module.scss';
import NewToDoItem from '../../ToDoItem/NewToDoItem';
import TodosContainer from '../../Containers/TodosContainer';

const Article = () => (
  <article className={styles.article}>
    <NewToDoItem />
    <TodosContainer />
  </article>
);

export default Article;
