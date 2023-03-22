import React from 'react';
import styles from './style.module.scss';
import ToDoItemView from '../ToDoItemView';
import ToDoItemEdit from '../ToDoItemEdit';
import { ITagState, IToDoData } from '../../interfaces';

interface Props {
  data: IToDoData[],
  setData: React.Dispatch<React.SetStateAction<IToDoData[]>>,
  tagsData: ITagState[]
  setTags: React.Dispatch<React.SetStateAction<ITagState[]>>
}

const Article = ({
  data, tagsData, setData, setTags,
}: Props) => {
  console.log(1);
  return (
    <article className={styles.article}>
      {data.map(({
        header, text, tags, isEditing,
      }, index) => (
        isEditing
          ? (
            <ToDoItemEdit
              header={header}
              text={text}
              tags={tags}
            />
          )
          : (
            <ToDoItemView
              data={data}
              setData={setData}
              tagsData={tagsData}
              setTags={setTags}
              index={index}
            />
          )
      ))}
      <ToDoItemEdit header="oleg" text="sadgdfagdfsgfadgadfgadf" tags={['wow', 'ivan']} />
    </article>
  );
};

export default Article;
