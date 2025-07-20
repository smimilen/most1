import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeedbackSection: FC = () => {
  const array = [
    {
      title:
        '\u00ABБыстро, чётко, с\u00A0контролем на\u00A0каждом этапе. Всё оборудование прибыло в\u00A0срок и\u00A0в\u00A0нужной комплектации\u00BB',
      capture: 'Андрей, владелец производственной компании',
    },
    {
      title:
        '\u00ABПоставили нестандартную линию под наши параметры. Сэкономили бюджет и\u00A0нервы\u00BB',
      capture: 'Ирина, руководитель отдела закупок',
    },
  ];

  return (
    <section className={s.section}>
      <div className={clsx(s.section__container)}>
        <h2 className={clsx('H1', s.section__title)}>
          Что говорят наши клиенты
        </h2>
        <div className={s.section__block}>
          <div className={s.section__wrapper}>
            <Image
              fill
              src={`/images/feedback.png`}
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
            <Link href={'/feedback'} className={clsx('H3', s.section__link)}>
              Читать все отзывы
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
