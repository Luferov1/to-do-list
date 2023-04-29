import {
  Inputs,
  ITagState, IToDoView,
} from '../interfaces';

export const createUniqueArrayOfTags = (arr: IToDoView[]) => [...new Set(arr
  .map(({ activeTags }) => activeTags)
  .reduce((acc, item) => [...acc, ...item], []))]
  .map((item) => ({
    name: item,
    isActive: true,
  }));

let id = 0;
export const createUniqueID = (str: string) => {
  id += 1;
  return `${str}${id}`;
};

export const filterTodos = (tags: ITagState[], todos: IToDoView[], isAddingNew: boolean) => todos
  .filter(({ activeTags }, index) => {
    const allowedTags = tags.filter(({ isActive }) => isActive).map((item) => item.name);
    if (index === 0 && isAddingNew) return true;
    return activeTags.some((item) => allowedTags.includes(item));
  })
  .reverse();

export const giveHandledTextAndTags = (text: string, tags: string[]): [string, string[]] => {
  const tagsInText = text
    .split(' ')
    .filter((item) => item.startsWith('#'))
    .filter((item) => !tags.includes(item.slice(1, item.length)));
  let handledText;
  let handledTags: string[] = [];
  if (!tagsInText.length) {
    handledText = text;
  } else {
    handledText = text.split('').filter((item) => item !== '#').join('');
    handledTags = tagsInText.reduce((acc: string[], item) => [
      ...acc, ...item.split('#').filter((word) => word.length !== 0),
    ], []);
  }
  return [handledText, handledTags];
};

export const createInitialInputState = (todo: IToDoView, isNew: boolean): Inputs => {
  if (isNew) {
    return {
      text: '',
      header: '',
      tagsInput: '',
    };
  }
  const { header, text } = todo;
  return {
    header,
    text,
    tagsInput: '',
  };
};
