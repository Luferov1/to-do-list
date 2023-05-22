import React from 'react';
import styles from './style.module.scss';
import { InputType } from '../../interfaces';
import TagsInput from '../Inputs/TagsInput';
import AddTagButton from '../Buttons/AddTagButton';

interface Props {
  tagsInput: InputType,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const TagsAdder = ({
  tagsInput, onClick,
}: Props) => (
  <div className={styles.tagsAdder}>
    <TagsInput
      params={tagsInput}
      ref={tagsInput.ref}
    />
    <AddTagButton onClick={onClick} />
  </div>
);

export default TagsAdder;
