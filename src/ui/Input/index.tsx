'use client';

import { IMaskInput } from 'react-imask';
import type { FC } from 'react';
import clsx from 'clsx';
import s from './input.module.scss';

interface InputProps {
  type?: 'text' | 'tel';
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  className,
  value,
  onChange,
  onBlur,
  onKeyDown,
}) => {
  if (type === 'tel') {
    return (
      <IMaskInput
        mask='+{7} (000) 000-00-00'
        unmask='typed'
        placeholder='+7 (___) ___-__-__'
        className={clsx(s.input, className)}
        value={value}
        onAccept={(val) => onChange?.(val as string)}
        onBlur={onBlur}
      />
    );
  }

  return (
    <input
      type='text'
      placeholder={placeholder}
      className={clsx(s.input, className)}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
