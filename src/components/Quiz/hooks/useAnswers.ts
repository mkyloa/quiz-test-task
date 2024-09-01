import { useSessionStorage } from '@/components/Quiz/hooks/useSessionStorage';
import { setAnswers } from '@/features/quizSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useAnswers = () => {
  const { data } = useSessionStorage('quizAnswers');
  
  const answers = useSelector((state: RootState) => state.quizReducer.answers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(answers).length && Object.keys(data).length) {
      dispatch(setAnswers(data));
    }
  }, [answers, data, dispatch]);

  return { answers };
};