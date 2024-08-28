
import { QuizQuestion } from '@/components/Quiz/quiz.typedefs';
import { initQuizConfig } from '@/components/Quiz/quizConfig';
import store from '@/store/store';

export const getQuestionUrl = (slug: string) => {

  return `/quiz/${slug}`;
};

export const getAnswer = (slug: string) => {
  const { answers } = store.getState().quizReducer;

  return answers[slug] || null;
};

export const getGender = () => {
  const { answers } = store.getState().quizReducer;

  return answers.gender || '';
};

export const getIsParent = () => {
  const { answers } = store.getState().quizReducer;
  const isParent = answers.parent === 'Yes';
  const singleIsParent = answers['single-parent'] === 'Yes';

  return isParent || singleIsParent;
};

export const getQuestion = (slug: string): QuizQuestion => {
  const gender = getGender();
  const isParent = getIsParent();
  const quizConfig = initQuizConfig(gender, isParent);
  const question = quizConfig.find(q => q.slug === slug);

  if (!question) {
    throw new Error(`Question with slug "${slug}" not found`);
  };

  return question;
};

