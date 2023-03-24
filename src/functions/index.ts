import { IToDoView } from '../interfaces';

const createUniqueArrayOfTags = (arr: IToDoView[]) => [...new Set(arr
  .map(({ tags }) => tags)
  .reduce((acc, item) => [...acc, ...item], []))]
  .map((item) => ({
    name: item,
    isActive: true,
  }));

export default createUniqueArrayOfTags;
