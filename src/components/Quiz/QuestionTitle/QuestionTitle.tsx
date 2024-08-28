import React, { FC } from 'react';
import cn from 'classnames';
import styles from './QuestionTitle.module.scss';

interface Props {
  text: string;
  subtitle?: string;
}

export const QuestionTitle: FC<Props> = ({ text, subtitle }) => (
  <div className={cn(styles.wrapper, {
    [styles.withSubtitle]: subtitle
  })}>
    <h2 className={styles.title}>
      {text}
    </h2>

    <h3 className={styles.subtitle}>
      {subtitle && subtitle}
    </h3>
  </div>
);