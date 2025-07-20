import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';
import Link from 'next/link';
import Button from '@/ui/Button';
import Image from 'next/image';

const DirectionsSections: FC = () => {
  const array: Array<{ image: string; title: string }> = [
    {
      image: 'equipment',
      title: 'Оборудование для\u00A0производства',
    },
    {
      image: 'constructional',
      title: 'Строительная техника',
    },
    {
      image: 'packaging',
      title: 'Линии упаковки',
    },
    {
      image: 'special',
      title: 'Спецзаказы и\u00A0нестандартные решения',
    },
    {
      image: 'armor',
      title: 'Металлообработка',
    },
    {
      image: 'feed',
      title: 'Пищевое оборудование',
    },
  ];

  return (
    <section className={s.section}>
      <div className={clsx('container', s.section__container)}>
        <div className={s.section__head}>
          <h2 className={clsx('H2', s.section__title)}>
            Основные направления деятельности
          </h2>
          <Link href={'/catalog'}>
            <Button variant='outline' icon='arrow'>
              Перейти в каталог
            </Button>
          </Link>
        </div>
        <ul className={s.section__grid}>
          {array.map(({ image, title }) => (
            <li key={title} className={s.section__cell}>
              <div className={s.section__wrapper}>
                <Image
                  fill
                  src={`/images/${image}.png`}
                  alt={title}
                  className={s.section__image}
                />
              </div>
              <span className={s.section__capture}>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DirectionsSections;
