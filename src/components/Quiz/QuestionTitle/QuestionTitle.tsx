import React, { FC } from 'react';
import styles from './QuestionTitle.module.scss';

interface Props {
  text: string;
}

export const QuestionTitle: FC<Props> = ({ text }) => (
  <h2 className={styles.title}>
    {text}
  </h2>
);