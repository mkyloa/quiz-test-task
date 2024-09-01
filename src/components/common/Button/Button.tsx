import React, { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import styles from './Button.module.scss';

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
  className?: string;
}

export const Button: FC<Props> = ({
  mode = ButtonMode.Primary,
  text,
  onClick,
  image,
  className,
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
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        styles[mode],
        className,
      )}
    >
      {buttonContent}
    </button>
  );
};
