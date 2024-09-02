import React, { FC } from 'react';
import { useAnswers } from '@/components/Quiz/hooks/useAnswers';
import { getQuestion } from '@/components/Quiz/quiz.helpers';
import { QuestionSlugs } from '@/components/Quiz/quiz.typedefs';
import styles from './Results.module.scss';

export const Results: FC = () => {
  const { text } = getQuestion(QuestionSlugs.Results);
  const { answers } = useAnswers();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        {text}
      </h2>

      <div className={styles.results}>
        {Object.entries(answers).map(([key, value], index) => (
          <div key={index}>
            <b>{key}:&nbsp;</b>
            {value}
          </div>
        ))}
      </div>
    </div>
  )
};