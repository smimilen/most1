'use client';

import s from './index.module.scss';

import Button from '@/ui/Button';
import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useOverlay } from '@/providers/OverlayProvider';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useScrollToForm } from '@/providers/FormScrollProvider';
import Logo from '@/shared/Logo';
import Menu from '../Menu';

interface INavigationProps {
  isLight?: boolean;
}

const Navigation: FC<INavigationProps> = ({ isLight = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { show, hide } = useOverlay();

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    }
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      hide();
      setTimeout(() => setIsVisible(false), 300);
    } else {
      setIsVisible(true);
      setTimeout(() => setIsOpen(true), 10);
      show(() => {
        setIsOpen(false);
        setTimeout(() => setIsVisible(false), 300);
      });
    }
  };

  const shouldRenderBlock = !isMobile || isVisible;

  const scrollToForm = useScrollToForm();

  const handleFormClick = () => {
    setIsOpen(false);
    hide();

    setTimeout(() => {
      scrollToForm();
    }, 300);
  };

  return (
    <div className={clsx(s.navigation, { [s.navigation_light]: isLight })}>
      <Logo isLight={isLight} />
      <button
        className={clsx(s.navigation__burger, {
          [s.navigation__burger_open]: isOpen,
          [s.navigation__burger_light]: isLight,
        })}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      {shouldRenderBlock && (
        <div
          className={clsx(s.navigation__block, {
            [s.navigation__block_open]: isOpen,
            [s.navigation__block_close]: !isOpen && isMobile,
            [s.navigation__block_light]: isLight,
          })}
        >
          <Menu isLight={isLight} isCollapsed={true} />
          <Button
            className={s.navigation__submit}
            icon='arrow'
            variant={isLight ? 'outline' : 'primary'}
            onClick={handleFormClick}
          >
            Оставить заявку
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
