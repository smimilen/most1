'use client';

import clsx from 'clsx';
import s from './index.module.scss';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { CatalogItemDto, CatalogListDto } from '../schemas/catalog.schema';

interface CatalogProps {
  data: CatalogListDto;
}

const Catalog: FC<CatalogProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <section className={s.section}>
      <div className={clsx(s.section__container)}>
        <ul className={s.section__grid}>
          {data.map(({ id, slug, name, image }: CatalogItemDto) => (
            <li key={id}>
              <Link
                href={`${pathname.replace(/\/$/, '')}/${slug}`}
                className={clsx(s.section__cell, s.cell)}
              >
                <div className={s.cell__wrapper}>
                  <Image fill src={image} alt={name} />
                </div>
                <div className={s.cell__content}>
                  <h3 className={clsx('H2', s.cell__name)}>{name}</h3>
                  <span className={clsx('', s.cell__capture)}>Подробнее</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          height: '1px',
          backgroundColor: 'var(--clr-border-black)',
        }}
      />
    </section>
  );
};

export default Catalog;
