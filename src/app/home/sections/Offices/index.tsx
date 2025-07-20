'use client';

import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';

import { useScrollToForm } from '@/providers/FormScrollProvider';

const OfficesSection: FC = () => {
  const scrollToForm = useScrollToForm();

  return (
    <section className={s.section}>
      <div className={clsx(s.section__container)}>
        <ul className={s.section__grid}>
          {[
            'Офисы в\u00A0Китае и\u00A0России',
            'Более 2000 успешно реализованных поставок',
            'Оборудование для производств, строительных и\u00A0промышленных компаний',
          ].map((text) => (
            <li key={text} className={s.section__cell}>
              <h2 className={clsx('H2', s.section__text)}> {text}</h2>
            </li>
          ))}
          <li className={s.section__cell}>
            <div onClick={scrollToForm} className={s.section__link}>
              <h2 className={clsx('H2', s.section__text)}>
                Узнать больше о наших услугах
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OfficesSection;
