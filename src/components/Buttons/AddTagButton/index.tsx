import React from 'react';
import styles from './style.module.scss';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const AddTagButton = ({ onClick }: Props) => (
  <button
    type="button"
    className={styles.addTagButton}
    onClick={onClick}
  >
    Add tag
  </button>
);

export default AddTagButton;
