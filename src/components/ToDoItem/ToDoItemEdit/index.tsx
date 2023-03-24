import React, { useState } from 'react';
import styles from './style.module.scss';
import { IToDOItemEditProps, IToDOItemEditState } from '../../../interfaces';
import createUniqueArrayOfTags from '../../../functions';
import Tag from '../../Tag';

const ToDoItemEdit = ({
  data, setData, setTags, index, setEditing, isNew, isEditing,
}: IToDOItemEditProps) => {
  const { header, text, tags } = isNew
    ? {
      header: '',
      text: '',
      tags: [],
    }
    : data[index];
  const initialState: IToDOItemEditState = {
    newHeader: header,
    newText: text,
    newTags: tags,
    newTagText: '',
  };
  const [state, setState] = useState(initialState);
  const [isError, setError] = useState(false);
  const {
    newHeader, newText, newTags, newTagText,
  } = state;
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.headerInput}
        value={newHeader}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setState({ ...state, newHeader: e.currentTarget.value });
        }}
        maxLength={25}
        required
      />
      <textarea
        className={styles.text}
        value={newText}
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
          setState({ ...state, newText: e.currentTarget.value });
        }}
        maxLength={240}
        required
      />
      {!isNew
        ? (
          <div className={styles.colorForText}>
            {text.split(' ').map((item) => (
              <span className={
                data[index].tags.includes(item)
                  ? styles.coloredSpan
                  : undefined
              }
              >
                {`${item} \u0020`}
              </span>
            ))}
          </div>
        )
        : null}

      <div className={styles.tags}>
        {newTags.map((item) => (
          <Tag
            key={`${item}${Math.random()}`}
            text={item}
            isEditing={isEditing}
            data={data}
            setData={setData}
            setTags={setTags}
            index={index}
            isNew={isNew}
          />
        ))}
      </div>
      <div className={styles.tagsAdder}>
        <input
          type="text"
          className={styles.tagsInput}
          value={newTagText}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setState({ ...state, newTagText: e.currentTarget.value });
          }}
        />
        <button
          type="button"
          className={styles.addTagButton}
          onClick={() => {
            setState({
              ...state,
              newTags: [...newTags, newTagText.split(' ').join('')],
              newTagText: '',
            });
          }}
        >
          Add tag
        </button>
      </div>
      <button
        type="button"
        className={styles.saveButton}
        onClick={() => {
          if (!newHeader.length || !newText.length || !newTags.length) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
          }
          const tagsInText = newText.split(' ').filter((item) => item.startsWith('#'));
          let handledText;
          let newHandledTags: string[] = [];
          if (!tagsInText.length) {
            handledText = newText;
          } else {
            handledText = newText.split('').filter((item) => item !== '#').join('');
            newHandledTags = tagsInText.reduce((acc: string[], item) => [
              ...acc, ...item.split('#').filter((word) => word.length !== 0),
            ], []);
          }
          const newData = data;
          newData[index] = {
            header: newHeader,
            text: handledText,
            tags: [...newTags, ...newHandledTags],
          };
          setData(newData);
          setEditing(false);
          setTags(createUniqueArrayOfTags(newData));
        }}
      >
        Save
      </button>
      <button
        type="button"
        className={styles.cancelButton}
        onClick={() => setEditing(false)}
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
