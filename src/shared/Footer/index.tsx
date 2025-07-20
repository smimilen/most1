'use client';

import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import Button from '@/ui/Button';
import useMediaQuery from '@/hooks/useMediaQuery';

const Footer: FC = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <footer className={clsx('container', s.footer)}>
      <div className={clsx('container', s.footer__container)}>
        <Logo className={s.footer__logo} />
        <Menu className={s.footer__menu} />
        <Button
          className={s.footer__btn}
          variant='outline'
          scroll
          icon='arrow'
          sizeBtn={isMobile ? 'long' : 'medium'}
        >
          Оставить заявку
        </Button>
        <div className={s.footer__underline} />
      </div>
    </footer>
  );
};

export default Footer;
