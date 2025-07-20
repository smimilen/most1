import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';
import Buttons from './Buttons';

interface IHeroProps {
  title: string;
  capture: string;
}

const HeroSection: FC<IHeroProps> = ({ title, capture }) => {
  return (
    <section className={s.section}>
      <div className={clsx('container', s.section__container)}>
        <div className={s.section__content}>
          <h1 className={clsx('Mega', s.section__title)}>{title}</h1>
          <p className={clsx('L2', s.section__capture)}>{capture}</p>
        </div>
        <div className={s.section__btns}>
          <Buttons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
