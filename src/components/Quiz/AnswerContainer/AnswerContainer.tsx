import React, { FC } from 'react';
import { Button, ButtonMode } from '@/components/common/Button/Button';
import { QuizQuestion } from '@/components/Quiz/quiz.typedefs';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setAnswer } from '@/features/quizSlice';
import styles from './AnswerContainer.module.scss';

interface Props {
  question: QuizQuestion;
}

export const AnswerContainer: FC<Props> = ({ question }) => {
  const router = useRouter();
  const { slug } = router.query;

  const dispatch = useDispatch();

  const handleAnswerChange = (answer: string, nextQuestionSlug: string) => {
    dispatch(setAnswer({ slug: `${slug}`, answer }));

    router.push(nextQuestionSlug);
  };

  return (
    <div className={styles.wrapper}>
      {question.options.map((option, index) => {
        const nextQuestionSlug = option.next || question.next || '';

        return (
          <Button
            mode={ButtonMode.Primary}
            key={index}
            text={option.text}
            onClick={() => handleAnswerChange(option.text, nextQuestionSlug)}
          />
        )
      }
      )}
    </div>
  );
}