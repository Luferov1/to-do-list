import React, { useState } from 'react';
import styles from './style.module.scss';
import Aside from './components/Aside';
import Article from './components/Article';
import ToDoData from './constants/toDoData';
import { ITagState, IToDoData } from './interfaces';
import createUniqueArrayOfTags from './functions';

const App = () => {
  const tagsArr: ITagState[] = createUniqueArrayOfTags(ToDoData);
  const toDoListInitialState: IToDoData[] = ToDoData.map((item) => ({
    ...item,
    isEditing: false,
  }));

  const [data, setData] = useState(toDoListInitialState);
  const [tags, setTags] = useState(tagsArr);
  return (
    <main className={styles.container}>
      <Aside state={tags} setState={setTags} />
      <Article
        data={data}
        tagsData={tags}
        setData={setData}
        setTags={setTags}
      />
    </main>
  );
};

export default App;
