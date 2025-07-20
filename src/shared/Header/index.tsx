'use client';

import s from './index.module.scss';

import Navigation from '@/shared/Navigation';
import clsx from 'clsx';

import { FC } from 'react';

interface IHeaderProps {
  isLight?: boolean;
}

const Header: FC<IHeaderProps> = ({ isLight = true }) => {
  return (
    <header
      className={clsx(s.header, {
        [s.header_light]: isLight,
      })}
    >
      <div className='container'>
        <Navigation isLight={isLight} />
      </div>
    </header>
  );
};

export default Header;
