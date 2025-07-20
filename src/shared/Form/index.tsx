'use client';

import clsx from 'clsx';
import s from './index.module.scss';

import { FC, useEffect } from 'react';
import Form from '@/ui/Form';

import {
  useFormRef,
  useFormAnimationState,
} from '@/providers/FormScrollProvider';
import { useOverlay } from '@/providers/OverlayProvider';

interface IFormProps {
  title: string;
  capture: string;
}

const FormSection: FC<IFormProps> = ({ title, capture }) => {
  const formRef = useFormRef();
  const { show, hide } = useOverlay();

  const {
    isFormVisible,
    setFormVisible,
    isScrollTriggered,
    setScrollTriggered,
  } = useFormAnimationState();

  useEffect(() => {
    const element = formRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isScrollTriggered) {
          setFormVisible(true);
          setScrollTriggered(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [formRef, isScrollTriggered, setFormVisible, setScrollTriggered]);

  useEffect(() => {
    if (isFormVisible) {
      show(() => {
        setFormVisible(false);
        setScrollTriggered(false);
      });
    } else {
      hide();
    }
  }, [isFormVisible]);

  return (
    <section
      className={clsx(s.section, isFormVisible && s.active)}
      ref={formRef}
    >
      <div className={clsx('container', s.section__container)}>
        <h2 className={clsx('H1', s.section__title)}>{title}</h2>
        <p className={clsx('M', s.section__capture)}>{capture}</p>
        <Form />
      </div>
    </section>
  );
};

export default FormSection;
