import React, { FC } from 'react';
import { QuestionTitle } from '@/components/Quiz/QuestionTitle';
import { Button, ButtonMode } from '@/components/common/Button/Button';
import { QuizHeader } from '@/components/Quiz/QuizHeader';
import { getAnswer, getQuestion, getQuestionUrl } from '@/components/Quiz/quiz.helpers';
import { QuestionSlugs } from '@/components/Quiz/quiz.typedefs';
import styles from './HowDoesItWork.module.scss';

export const HowDoesItWork: FC = () => {
  const { text, subheader } = getQuestion(QuestionSlugs.HowDoesItWork); 
  const prevAnswer = getAnswer(QuestionSlugs.Overthink);

  const nextQuestion = prevAnswer === 'Yes'
    ? getQuestionUrl(QuestionSlugs.MostImportant)
    : getQuestionUrl(QuestionSlugs.EmotionalControl);

  return (
    <div className={styles.wrapper}>
      <QuizHeader inverted />

      <QuestionTitle
        text={text}
      />

      <p className={styles.textWrapper}>
        {subheader}
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