import React, { FC } from 'react';
import styles from './HowDoesItWork.module.scss';
import { QuestionTitle } from '@/components/Quiz/QuestionTitle';
import { Button, ButtonMode } from '@/components/common/Button/Button';
import { QuizHeader } from '@/components/Quiz/QuizHeader';
import { getAnswer, getQuestionUrl } from '@/components/Quiz/quiz.helpers';

export const HowDoesItWork: FC = () => {
  const prevAnswer = getAnswer('overthink');

  const nextQuestion = prevAnswer === 'Yes'
    ? getQuestionUrl('most-important')
    : getQuestionUrl('emotional-control');

  return (
    <div className={styles.wrapper}>
      <QuizHeader />

      <QuestionTitle
        text="So how does it work?"
      />

      <p className={styles.textWrapper}>
        We analyze hundreds of data points to create your unique astrological blueprint.
        This is combined with AI to tailor-make your astrological insights, based on your answers.
        We’re going to change your relationship with astrology.
      </p>

      <div className={styles.buttonWrapper}>
        <Button
          mode={ButtonMode.Inverted}
          text="Next"
          href={nextQuestion}
        />
      </div>
    </div>
  )
};