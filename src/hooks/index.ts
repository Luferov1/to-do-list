import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type UseError = () => [boolean, () => void];

export const useError: UseError = () => {
  const [isError, setError] = useState(false);
  const toggleError = () => {
    setError(true);
    setTimeout(() => setError(false), 3000);
  };
  return [isError, toggleError];
};
