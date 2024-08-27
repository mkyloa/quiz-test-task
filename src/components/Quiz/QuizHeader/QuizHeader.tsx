import React, { FC } from 'react';
import { IconChevronLeft } from '@/components/common/icons/IconChevronLeft';
import { IconNebula } from '@/components/common/icons/IconNebula';
import { useRouter } from 'next/navigation';
import { Button, ButtonMode } from '@/components/common/Button/Button';
import styles from './QuizHeader.module.scss';

export const QuizHeader: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Button
        mode={ButtonMode.Transparent}
        Icon={IconChevronLeft}
        onClick={router.back}
      />

      <div className={styles.icon}>
        <IconNebula />
      </div>
    </header>
  );
};