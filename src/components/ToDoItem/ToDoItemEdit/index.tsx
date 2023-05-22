import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './style.module.scss';
import { useAppDispatch, useAppSelector, useError } from '../../../hooks';
import { mainPageSlice } from '../../../store/reducers/mainPageSlice';
import { createInitialInputState, giveHandledTextAndTags } from '../../../functions';
import { Inputs } from '../../../interfaces';
import HeaderInput from '../../Inputs/HeaderInput';
import TextInput from '../../Inputs/TextInput';
import ColorForText from '../../ColorForText';
import TagsContainer from '../../Containers/TagsContainer';
import CancelEditingToDoButton from '../../Buttons/CancelEditingToDoButton';
import SubmitToDoButton from '../../Buttons/SubmitToDoButton';
import TagsAdder from '../../TagsAdder';

interface Props {
  isNew: boolean,
  index: number,
}
const ToDoItemEdit = ({ index, isNew }: Props) => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.mainPageReducer);
  const {
    setToDoState, refreshTags, toggleIsNewEditing,
  } = mainPageSlice.actions;

  const initialInputValues = createInitialInputState(todos[index], isNew);
  const {
    register, handleSubmit, getValues, formState: { errors }, resetField, watch,
  } = useForm<Inputs>({ defaultValues: initialInputValues });
  const headerInput = register('header', { required: true, maxLength: 25 });
  const textarea = register('text', { required: true, maxLength: 240 });
  const tagsInput = register('tagsInput', { maxLength: 25, minLength: 1 });

  const [isError, toggleError] = useError();
  const initialTags = isNew ? [] : todos[index].activeTags;
  const [tags, setTags] = useState(initialTags);

  const tagClickHandler = () => {
    const indexOfTag = tags.indexOf(getValues('text'));
    const newTags = [...tags];
    newTags.splice(indexOfTag, 1);
    setTags(newTags);
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (errors.text || errors.header || tags.length === 0) {
      toggleError();
      return;
    }
    const [handledText, handledTags] = giveHandledTextAndTags(data.text, tags);
    dispatch(setToDoState({
      activeTags: [...tags, ...handledTags],
      text: handledText,
      index,
      isEditing: false,
      header: data.header,
    }));
    dispatch(refreshTags());
    dispatch(toggleIsNewEditing(false));
  };
  const setTag = () => {
    const value = getValues('tagsInput');
    if (!tags.includes(value)) setTags([...tags, value]);
    resetField('tagsInput');
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <HeaderInput params={headerInput} ref={headerInput.ref} />
      <TextInput params={textarea} ref={textarea.ref} />
      {!isNew && <ColorForText index={index} text={watch('text')} />}
      <TagsContainer activeTags={tags} index={index} isNew={isNew} onClick={tagClickHandler} />
      <TagsAdder tagsInput={tagsInput} onClick={setTag} />
      <SubmitToDoButton />
      <CancelEditingToDoButton index={index} isNew={isNew} />
      {isError && <div className={styles.error}>You must enter name, text and at least 1 tag</div>}
    </form>
  );
};

export default ToDoItemEdit;
