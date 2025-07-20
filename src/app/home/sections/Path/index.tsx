import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';
import Image from 'next/image';
import Button from '@/ui/Button';

const PathSection: FC = () => {
  const array = [
    {
      title: 'Заявка и\u00A0консультация',
      capture:
        'Расскажите, что нужно\u00A0\u2014 подберём оптимальный вариант.',
    },
    {
      title: 'Поиск и\u00A0проверка поставщика',
      capture: 'Находим, проверяем, согласуем.',
    },
    {
      title: 'Заключение договора',
      capture: 'Все официально и\u00A0прозрачно.',
    },
    {
      title: 'Контроль производства и\u00A0отгрузка',
      capture: 'Фотографии, отчёты, упаковка.',
    },
    {
      title: 'Доставка и\u00A0растаможка',
      capture: 'Своими силами или вашей\u00A0ТК.',
    },
    {
      title: 'Получение оборудования',
      capture: 'Привозим до\u00A0вашего склада.',
    },
  ];

  return (
    <section className={s.section}>
      <div className={clsx(s.section__container)}>
        <h2 className={clsx('H1', s.section__title)}>
          Простой путь от&nbsp;заявки до&nbsp;запуска
        </h2>
        <div className={s.section__block}>
          <div className={s.section__wrapper}>
            <Image
              fill
              src={`/images/path.png`}
              alt='Изображение с контейнерами'
              className={s.section__image}
            />
          </div>
          <ul className={s.section__list}>
            {array.map(({ title, capture }, index) => (
              <li key={title} className={clsx(s.section__item, s.item)}>
                <h3 className={clsx('H3', s.item__title)}>
                  {++index + '. ' + title}
                </h3>
                <span className={clsx('L', s.item__capture)}>{capture}</span>
              </li>
            ))}
            <Button scroll={true} className={s.section__btn} sizeBtn='long'>
              Оставить заявку
            </Button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PathSection;
