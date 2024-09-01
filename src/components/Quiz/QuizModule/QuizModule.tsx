import { FC } from 'react';
import { AnswerContainer } from '@/components/Quiz/AnswerContainer';
import { QuestionTitle } from '@/components/Quiz/QuestionTitle';
import { QuizHeader } from '@/components/Quiz/QuizHeader';
import { getQuestion } from '@/components/Quiz/quiz.helpers';
import { QuestionSlugs } from '@/components/Quiz/quiz.typedefs';
import styles from './QuizModule.module.scss';

interface Props {
  slug: QuestionSlugs;
}

export const QuizModule: FC<Props> = ({ slug }) => {
  const question = getQuestion(slug);

  return (
    <>
      <QuizHeader />

      <main className={styles.wrapper}>
        <QuestionTitle
          text={question.text}
          subtitle={question?.subheader}
        />

        <AnswerContainer question={question} />
      </main>
    </>
  );
}