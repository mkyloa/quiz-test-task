import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Button, ButtonMode } from '@/components/common/Button/Button';
import cn from 'classnames';
import Image from 'next/image';
import logo from '@/../public/logo.svg'
import chevronLeft from '@/../public/chevron-left.svg'
import styles from './QuizHeader.module.scss';

interface Props {
  inverted?: boolean;
}

export const QuizHeader: FC<Props> = ({ inverted }) => {
  const router = useRouter();

  return (
    <header className={cn(styles.header,
      {
        [styles.inverted]: inverted
      }
    )}>
      <Button
        mode={ButtonMode.Transparent}
        image={chevronLeft}
        text="Go back"
        onClick={router.back}
      />

      <div className={styles.icon}>
        <Image
          src={logo}
          alt="Nebula logo"
        />
      </div>
    </header>
  );
};