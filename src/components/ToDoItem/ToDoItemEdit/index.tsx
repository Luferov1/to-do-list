import React, { useState } from 'react';
import styles from './style.module.scss';
import Tag from '../../Tag';
import { useAppDispatch, useAppSelector, useError } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';
import { createUniqueID } from '../../../functions';
import { zeroToDoState } from '../../../constants/zeroToDoState';
import { TNewTodo } from '../../../interfaces';

interface Props {
  isNew: boolean,
  index: number
}
const ToDoItemEdit = ({ index, isNew }: Props) => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const {
    setToDoState, refreshTags, toggleIsNewEditing,
  } = mainPageSlice.actions;
  const { header, text, activeTags } = todos[index] || zeroToDoState;
  const [newToDoState, setNewToDoState] = useState<TNewTodo>({ header, text, activeTags });
  const [newTagText, setNewTagText] = useState('');
  const [isError, toggleError] = useError();
  const tagsArr = [...newToDoState.activeTags];
  const tagClickHandler = () => {
    const indexOfTag = tagsArr.indexOf(text);
    tagsArr.splice(indexOfTag, 1);
    setNewToDoState({ ...newToDoState, activeTags: tagsArr });
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.headerInput}
        value={newToDoState.header}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setNewToDoState({ ...newToDoState, header: e.currentTarget.value });
        }}
        maxLength={25}
        required
      />
      <textarea
        className={styles.text}
        value={newToDoState.text}
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
          setNewToDoState({ ...newToDoState, text: e.currentTarget.value });
        }}
        maxLength={240}
        required
      />
      {!isNew && (
      <div className={styles.colorForText}>
        {text.split(' ').map((item) => (
          <span
            className={
                todos[index].activeTags.includes(item)
                  ? styles.coloredSpan
                  : undefined
              }
            key={createUniqueID(item)}
          >
            {`${item} \u0020`}
          </span>
        ))}
      </div>
      )}

      <div className={styles.tags}>
        {newToDoState.activeTags.map((item) => (
          <Tag
            key={createUniqueID(item)}
            text={item}
            index={index}
            isNew={isNew}
            onClick={tagClickHandler}
          />
        ))}
      </div>
      <div className={styles.tagsAdder}>
        <input
          type="text"
          className={styles.tagsInput}
          value={newTagText}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setNewTagText(e.currentTarget.value);
          }}
        />
        <button
          type="button"
          className={styles.addTagButton}
          onClick={() => {
            setNewToDoState({ ...newToDoState, activeTags: [...newToDoState.activeTags, newTagText.split(' ').join('')] });
          }}
        >
          Add tag
        </button>
      </div>
      <button
        type="button"
        className={styles.saveButton}
        onClick={() => {
          if (!newToDoState.header.length
            || !newToDoState.text.length
            || !newToDoState.activeTags.length) {
            toggleError();
            return;
          }
          const tagsInText = newToDoState.text.split(' ').filter((item) => item.startsWith('#'));
          let handledText;
          let newHandledTags: string[] = [];
          if (!tagsInText.length) {
            handledText = newToDoState.text;
          } else {
            handledText = newToDoState.text.split('').filter((item) => item !== '#').join('');
            newHandledTags = tagsInText.reduce((acc: string[], item) => [
              ...acc, ...item.split('#').filter((word) => word.length !== 0),
            ], []);
          }
          dispatch(setToDoState({
            ...newToDoState,
            activeTags: [...newToDoState.activeTags, ...newHandledTags],
            text: handledText,
            index,
            isEditing: false,
          }));
          dispatch(refreshTags());
          dispatch(toggleIsNewEditing(false));
        }}
      >
        Save
      </button>
      <button
        type="button"
        className={styles.cancelButton}
        onClick={() => {
          if (isNew) {
            dispatch(toggleIsNewEditing(false));
          } else {
            dispatch(setToDoState({ ...todos[index], isEditing: false, index }));
          }
          setNewToDoState(zeroToDoState);
        }}
      >
        Cancel
      </button>
      {isError
        ? <div className={styles.error}>You must enter name, text and at least 1 tag</div>
        : null}
    </div>
  );
};

export default ToDoItemEdit;
