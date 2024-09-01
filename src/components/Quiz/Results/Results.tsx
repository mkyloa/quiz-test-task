import React, { FC } from 'react';
import { useAnswers } from '@/components/Quiz/hooks/useAnswers';
import { getQuestion } from '@/components/Quiz/quiz.helpers';
import { QuestionSlugs } from '@/components/Quiz/quiz.typedefs';

export const Results: FC = () => {
  const { text } = getQuestion(QuestionSlugs.Results); 
  const { answers } = useAnswers();

  return (
    <>
      <h2>
        {text}
      </h2>

      {Object.entries(answers).map(([key, value], index) => (
        <div key={index}>
          <b>{key}:&nbsp;</b>
          {value}
        </div>
      ))}
    </>
  )
};