import { FC } from 'react';
import { AnswerContainer } from '@/components/Quiz/AnswerContainer';
import { QuestionTitle } from '@/components/Quiz/QuestionTitle';
import { QuizHeader } from '@/components/Quiz/QuizHeader';
import styles from './QuizModule.module.scss';
import { useRouter } from 'next/router';
import { getQuestion } from '@/components/Quiz/quiz.helpers';
// import { Provider } from 'react-redux';
// import store from '@/store/store';

export const QuizModule: FC = () => {
  const { query } = useRouter()
  const { slug } = query;

  if (!slug) {
    return null;
  };

  const question = getQuestion(`${slug}`);

  return (
    <>
      <QuizHeader />

      <main className={styles.wrapper}>
        <QuestionTitle text={question.text} />
        <AnswerContainer question={question} />
      </main>
    </>
  );
}