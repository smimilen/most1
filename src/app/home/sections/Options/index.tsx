import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';

const OptionsSection: FC = () => {
  const plates: Array<{ icon: string; title: string; capture: string }> = [
    {
      icon: 'money',
      title: 'Под ключ',
      capture:
        'От\u00A0поиска и\u00A0проверки поставщика до\u00A0растаможки и\u00A0доставки.',
    },
    {
      icon: 'users',
      title: 'Гарантия качества',
      capture: 'Проверяем оборудование на\u00A0заводе до\u00A0отгрузки.',
    },
    {
      icon: 'clock',
      title: 'Контроль на\u00A0каждом этапе',
      capture: 'Фото, видео и\u00A0полная отчётность.',
    },
    {
      icon: 'doc',
      title: 'Юридическая чистота',
      capture: 'Полное оформление, включая таможню и\u00A0сертификацию.',
    },
    {
      icon: 'attention',
      title: 'Быстрая доставка',
      capture: 'Сокращаем сроки за\u00A0счёт отлаженной логистики.',
    },
  ];

  return (
    <section className={s.section}>
      <div className={clsx('container', s.section__container)}>
        {plates.map(({ icon, title, capture }) => (
          <div key={title} className={(s.section__plate, s.plate)}>
            <div
              className={s.plate__icon}
              style={{ ['--mask-url' as string]: `url(/icons/${icon}.svg)` }}
            ></div>
            <h4 className={clsx('H4', s.plate__title)}>{title}</h4>
            <span className={clsx('M', s.plate__capture)}>{capture}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OptionsSection;
