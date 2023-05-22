import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ITagState, IToDoViewForDispatch, MainPageStore,
} from '../../interfaces';
import toDoData from '../../constants/toDoData.json';
import { createUniqueArrayOfTags } from '../../functions';

const initialState: MainPageStore = {
  tags: createUniqueArrayOfTags(toDoData),
  todos: toDoData,
  newToDo: {
    header: '',
    text: '',
    activeTags: [],
  },
  isNewToDoEditing: false,
};

export const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {
    addNewTag(state, action: PayloadAction<ITagState>) {
      state.tags = [...state.tags, action.payload];
    },
    changeTagState(state, action: PayloadAction<number>) {
      state.tags[action.payload].isActive = !state.tags[action.payload].isActive;
    },
    setToDoState(state, action: PayloadAction<IToDoViewForDispatch>) {
      const {
        header, activeTags, text, isEditing, index,
      } = action.payload;
      state.todos[index] = {
        header,
        activeTags,
        text,
        isEditing,
      };
    },
    addNewToDo(state) {
      state.todos = [{
        header: '',
        activeTags: [],
        text: '',
        isEditing: false,
      }, ...state.todos];
    },
    setEditing(state, action: PayloadAction<number>) {
      state.todos = state.todos.map((item, index) => {
        if (index === action.payload) {
          return { ...item, isEditing: true };
        }
        return { ...item, isEditing: false };
      });
    },
    deleteToDo(state, action: PayloadAction<number>) {
      state.todos.splice(action.payload, 1);
    },
    refreshTags(state) {
      state.tags = createUniqueArrayOfTags(state.todos);
    },
    toggleIsNewEditing(state, action: PayloadAction<boolean>) {
      state.isNewToDoEditing = action.payload;
    },
  },
});

export default mainPageSlice.reducer;
