import { FC } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import cn from 'classnames';

interface Props {
  Icon?: FC;
  text?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: FC<Props> = ({
  text,
  href,
  onClick,
  Icon,
}) => {
  const buttonContent = Icon ? <Icon /> : text;

  return (
    href
      ? (
        <Link href={href} className={cn(styles.button, styles.transparent)}>
          {buttonContent}
        </Link>
      )
      : (
        <button
          className={cn(styles.button, styles.transparent)}
          onClick={onClick}
        >
          {buttonContent}
        </button>
      )
  );
};
