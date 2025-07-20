'use client';

import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';

const Map = dynamic(() => import('@/shared/Map'), { ssr: false });

import Button from '@/ui/Button';
import dynamic from 'next/dynamic';

interface IContact {
  key: string;
  value: React.ReactNode;
}

interface LocationProps {
  title?: string;
  contacts: IContact[];
  showButtons?: boolean;
  coords: [number, number];
  office: string;
}

const Location: FC<LocationProps> = ({
  title = 'В России',
  contacts,
  showButtons = false,
  coords,
  office,
}) => {
  return (
    <section className={s.section}>
      <div className={clsx(s.section__container)}>
        <div className={s.section__block}>
          <h2 className={clsx('H1', s.section__title)}>{title}</h2>
          <span className={clsx('L2', s.section__subtitle)}>
            Китайско-Российский Золотой Мост
          </span>
          <ul className={s.section__list}>
            {contacts.map(({ key, value }, index) => (
              <li key={index + key} className={clsx(s.section__item, s.item)}>
                <h3 className={clsx('L2', s.item__key)}>{key}</h3>
                {value}
              </li>
            ))}
          </ul>

          {showButtons && (
            <div className={s.section__buttons}>
              <a
                href='https://wa.me/79147873341'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='plate' sizeBtn='long' icon='wa'>
                  Написать в&nbsp;What&apos;s&nbsp;App
                </Button>
              </a>

              <a
                href='https://t.me/shadow21_11'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='plate' sizeBtn='long' icon='tg'>
                  Написать в&nbsp;Telegram
                </Button>
              </a>
            </div>
          )}
        </div>
        <div className={s.section__wrapper}>
          <Map coords={coords} title={office} />
        </div>
      </div>
    </section>
  );
};

export default Location;
