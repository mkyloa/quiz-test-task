import { FC } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export enum ButtonMode {
  Primary = 'primary',
  Transparent = 'transparent',
  Inverted = 'inverted',
}

interface Props {
  mode?: ButtonMode,
  Icon?: FC;
  text?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: FC<Props> = ({
  mode = ButtonMode.Primary,
  text,
  href,
  onClick,
  Icon,
}) => {
  const buttonContent = Icon ? <Icon /> : text;

  return (
    href
      ? (
        <Link
          href={href}
          className={cn(styles.button, styles[mode])}
        >
          {buttonContent}
        </Link>
      )
      : (
        <button
          className={cn(styles.button, styles[mode])}
          onClick={onClick}
        >
          {buttonContent}
        </button>
      )
  );
};
