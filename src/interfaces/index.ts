import { UseFormRegisterReturn } from 'react-hook-form';

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

export interface IndexOnly {
  index: number
}

export interface Inputs {
  header: string,
  text: string,
  tagsInput: string
}

export type InputNames = 'header' | 'text' | 'tagsInput';

export type InputType = UseFormRegisterReturn<InputNames>;

export interface InputInterface {
  params: InputType
}
