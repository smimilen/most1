import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className={s.section}>
      <div className={clsx('container', s.section__container)}>
        <div className={s.section__content}>
          <h2 className={clsx('Mega', s.section__title)}>
            15&nbsp;лет соединяем бизнес России и&nbsp;Китая
          </h2>
          <p className={clsx('L2', s.section__capture)}>
            Компания &laquo;Китайско-Российский Золотой Мост&raquo; помогает
            бизнесу закупать оборудование в&nbsp;Китае без посредников
            и&nbsp;рисков. Мы&nbsp;знаем рынок изнутри, говорим на&nbsp;одном
            языке с&nbsp;заводами и&nbsp;находим решения даже в&nbsp;самых
            нестандартных задачах.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
