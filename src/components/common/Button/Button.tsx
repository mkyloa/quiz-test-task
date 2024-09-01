import { FC } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';

export enum ButtonMode {
  Primary = 'primary',
  Transparent = 'transparent',
  Inverted = 'inverted',
}

interface Props {
  mode?: ButtonMode,
  image?: string;
  text: string;
  onClick?: () => void;
  href?: string;
}

export const Button: FC<Props> = ({
  mode = ButtonMode.Primary,
  text,
  href,
  onClick,
  image,
}) => {
  const buttonContent = image
    ? (
      <Image
        src={image}
        alt={text}
        className={styles.transparent}
      />
    )
    : text;

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
