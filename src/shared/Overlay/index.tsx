'use client';

import s from './index.module.scss';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useOverlay } from '@/providers/OverlayProvider';

const Overlay = () => {
  const { isActive, hide } = useOverlay();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isActive) {
      setMounted(true);
      setVisible(true);
    } else if (mounted) {
      setVisible(false);
      const timeout = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isActive, mounted]);

  useEffect(() => {
    if (!isActive) return;

    const handleScroll = () => {
      hide();
      window.removeEventListener('scroll', handleScroll);
    };

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, hide]);

  if (!mounted) return null;

  return (
    <div
      className={clsx(s.overlay, visible ? s.overlay_in : s.overlay_out)}
      onClick={hide}
    />
  );
};

export default Overlay;
