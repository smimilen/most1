'use client';

import Link from 'next/link';
import clsx from 'clsx';
import s from './index.module.scss';
import { FC } from 'react';

interface ILogoProps {
  isLight?: boolean;
  className?: string;
}

const Logo: FC<ILogoProps> = ({ isLight = true, className }) => (
  <Link
    href='/home'
    className={clsx(
      s.logo,
      {
        [s.logo_light]: isLight,
      },
      className
    )}
  >
    <div />
    <span className='XL'>China bridge</span>
  </Link>
);

export default Logo;
