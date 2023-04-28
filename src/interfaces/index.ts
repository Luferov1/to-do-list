import React from 'react';

export interface IToDoView {
  header: string,
  text: string,
  activeTags: string[],
  isEditing: boolean,
}

export interface IToDoViewForDispatch extends IToDoView {
  index: number
}

export interface ITagState {
  name: unknown,
  isActive: boolean
}

export type TNewTodo = Omit<IToDoView, 'isEditing'>;

export interface MainPageStore {
  todos: IToDoView[],
  tags: ITagState[],
  newToDo: TNewTodo,
  isNewToDoEditing: boolean,
}

export interface IToDoItemProps {
  data: IToDoView[],
  setData: React.Dispatch<React.SetStateAction<IToDoView[]>>,
  setTags: React.Dispatch<React.SetStateAction<ITagState[]>>,
  index: number
}

export interface IToDoItemViewNProps extends IToDoItemProps {
  isEditing: boolean,
  setEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IToDOItemEditProps extends IToDoItemViewNProps {
  isNew: boolean
}
