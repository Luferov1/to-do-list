export interface IToDOView {
  header: string,
  text: string,
  tags: string[]
}

export interface ITagState {
  name: unknown,
  isActive: boolean
}

export interface IToDoData extends IToDOView {
  isEditing: boolean
}
