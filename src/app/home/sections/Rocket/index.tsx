import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';

import Image from 'next/image';
import Buttons from './Buttons';

const RocketSection: FC = () => {
  return (
    <section className={s.section}>
      <div className={clsx('container', s.section__container)}>
        <div className={s.section__block}>
          <h1 className={clsx('H1', s.section__title)}>
            Оборудование из&nbsp;Китая&nbsp;&mdash; под ключ, с&nbsp;гарантией
          </h1>
          <span className={clsx('L2', s.section__capture)}>
            Импортируем, проверяем, доставляем и&nbsp;оформляем &laquo;под
            вас&raquo;&nbsp;&mdash; с&nbsp;2006&nbsp;года. Вы&nbsp;получаете
            надёжного партнёра, выгодные цены и&nbsp;полное сопровождение.{' '}
          </span>
          <div className={s.section__buttons}>
            <Buttons />
          </div>
        </div>
        <div className={s.section__wrapper}>
          <Image
            fill
            src='/images/rocket.svg'
            alt='Ракета'
            className={s.section__image}
          />
        </div>
      </div>
    </section>
  );
};

export default RocketSection;
