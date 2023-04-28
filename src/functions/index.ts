import { ITagState, IToDoView } from '../interfaces';

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
