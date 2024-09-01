import React, { FC } from 'react';
import { Button } from '@/components/common/Button/Button';
import { getQuestionUrl } from '@/components/Quiz/quiz.helpers';
import { QuestionSlugs } from '@/components/Quiz/quiz.typedefs';
import { useRouter } from 'next/navigation';
import styles from './QuizStart.module.scss';

export const QuizStart: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <Button
        text='Start the quiz'
        onClick={() => router.push(getQuestionUrl(QuestionSlugs.Gender))}
      />
    </div>
  );
}