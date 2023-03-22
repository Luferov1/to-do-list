import React from 'react';
import styles from './style.module.scss';
import { IToDOView } from '../../interfaces';

const ToDoItemEdit = ({ text, tags, header }: IToDOView) => (
  <div className={styles.container}>
    <input type="text" className={styles.header} value={header} />
    <textarea className={styles.text}>{text}</textarea>
    <div className={styles.tags}>
      {tags.map((item) => <span key={`${item}${Math.random()}`} className={styles.tag}>{`${item} `}</span>)}
    </div>
    <div className={styles.tagsAdder}>
      <input type="text" className={styles.tagsInput} />
      <button type="button" className={styles.addTagButton}>Add tag</button>
    </div>
    <button type="button" className={styles.saveButton}>Save</button>
    <button type="button" className={styles.cancelButton}>Cancel</button>
  </div>
);

export default ToDoItemEdit;
