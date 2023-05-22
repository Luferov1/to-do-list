import React from 'react';
import styles from './style.module.scss';
import Aside from './components/Main/Aside';
import Article from './components/Main/Article';

const App = () => (
  <main className={styles.container}>
    <Aside />
    <Article />
  </main>
);

export default App;
