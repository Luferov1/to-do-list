import React from 'react';
import styles from './style.module.scss';
import TagButtonsContainer from '../../Containers/TagButtonsContainer';

const Aside = () => (
  <aside className={styles.aside}>
    <h2 className={styles.header}>created by Luferov1</h2>
    <h3 className={styles.subHeader}>Filter by tags</h3>
    <TagButtonsContainer />
  </aside>
);

export default Aside;
