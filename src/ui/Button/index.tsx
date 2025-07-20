'use client';

import s from './index.module.scss';

import { FC, HTMLProps, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { useScrollToForm } from '@/providers/FormScrollProvider';

type ButtonProps = PropsWithChildren<HTMLProps<HTMLButtonElement>> & {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'vacuum' | 'plate';
  sizeBtn?: 'small' | 'medium' | 'large' | 'long';
  icon?: 'arrow' | 'wa' | 'tg' | 'back';
  scroll?: boolean;
  isActive?: boolean;
};

const Button: FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  sizeBtn = 'medium',
  isActive = false,
  icon,
  scroll = false,
  // badge,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const scrollToForm = useScrollToForm();

  return (
    <button
      type={type}
      className={clsx(
        'Button',
        s.button,
        s[`button_${variant}`],
        { [s.active]: isActive },
        {
          [s[`button_${icon}`]]: icon,
        },
        sizeBtn && s[`button_${sizeBtn}`],
        className
      )}
      onClick={(e) => {
        if (scroll) scrollToForm();
        rest.onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
