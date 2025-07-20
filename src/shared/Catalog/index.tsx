'use client';

import clsx from 'clsx';
import s from './index.module.scss';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/shared/Search';

import { ItemListDto } from '../schemas/item.schema';

interface CatalogProps {
  data: ItemListDto;
  slug: string;
}

const Catalog: FC<CatalogProps> = ({ data, slug }) => {
  const [filteredList, setFilteredList] = useState<ItemListDto>(data);

  return (
    <section className={s.section}>
      <div className={clsx(s.section__container)}>
        <Search data={data} onResult={setFilteredList} />
        <ul className={s.section__grid}>
          {filteredList.map(({ name, image, id }) => (
            <li key={name}>
              <Link
                href={`/catalog/${slug}/${id}`}
                className={clsx(s.section__cell, s.cell)}
              >
                <div className={s.cell__wrapper}>
                  <Image fill src={image} alt={name} />
                </div>
                <div className={s.cell__text}>
                  <span className={clsx('XL', s.cell__name)}>{name}</span>
                  <span className={clsx('S', s.cell__capture)}>Подробнее</span>
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
