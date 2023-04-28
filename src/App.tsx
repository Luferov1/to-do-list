import React from 'react';
import styles from './style.module.scss';
import Aside from './components/Aside';
import Article from './components/Article';

const App = () => (
  <main className={styles.container}>
    <Aside />
    <Article />
  </main>
);

export default App;
