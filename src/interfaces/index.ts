import React from 'react';

export interface IToDoView {
  header: string,
  text: string,
  tags: string[]
}

export interface ITagState {
  name: unknown,
  isActive: boolean
}

export interface IArticleProps {
  data: IToDoView[],
  setData: React.Dispatch<React.SetStateAction<IToDoView[]>>,
  tagsData: ITagState[]
  setTags: React.Dispatch<React.SetStateAction<ITagState[]>>
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

export interface IToDOItemEditState {
  newHeader: string,
  newText: string,
  newTags: string[],
  newTagText: string
}
