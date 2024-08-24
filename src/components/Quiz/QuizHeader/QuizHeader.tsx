import React, { FC } from 'react';
import { IconChevronLeft } from '@/components/common/icons/IconChevronLeft';
import { IconNebula } from '@/components/common/icons/IconNebula';
import styles from './QuizHeader.module.scss';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button/Button';

export const QuizHeader: FC = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Button 
        Icon={IconChevronLeft} 
        onClick={router.back} 
      />

      <IconNebula />

      <div className={styles.spacer} />
    </header>
  );
};