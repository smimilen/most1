'use client';

import s from './index.module.scss';
import { FC } from 'react';

import Image from 'next/image';
import clsx from 'clsx';
import DOMPurify from 'isomorphic-dompurify';
import Button from '@/ui/Button';
import { useRouter } from 'next/navigation';
import { ItemDto } from '../schemas/item.schema';

interface CardSectionProps {
  item: ItemDto;
}

const CardSection: FC<CardSectionProps> = ({ item }) => {
  const router = useRouter();

  const {
    name,
    image,
    description,
    itemList,
    listTitle,
    description2,
    listTitle2,
    itemList2,
    underline,
  } = item;

  return (
    <section className={s.section}>
      <div className={s.section__container}>
        <Button
          variant='vacuum'
          icon='back'
          sizeBtn='large'
          className={s.section__back}
          onClick={() => router.back()}
        >
          Назад
        </Button>
        <div className={s.section__text}>
          <h2 className={clsx('H1', s.section__title)}>{name}</h2>
          <div className={s.section__wrapper}>
            <Image src={image} alt={name} fill className={s.image} />
          </div>
          {description && (
            <p
              className={clsx('XL', s.section__description)}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  description.replace(/\n\n/g, '<br /><br />')
                ),
              }}
            />
          )}
        </div>

        {listTitle && (
          <h3
            className={clsx('H2', s.section__subtitle)}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(listTitle),
            }}
          />
        )}
        {itemList && (
          <ul className={s.section__list}>
            {itemList.split('\n').map((item) => (
              <li
                className={clsx('XL', s.section__item)}
                key={item}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item),
                }}
              />
            ))}
          </ul>
        )}
        {description2 && (
          <p
            className={clsx('XL', s.section__description)}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                description2.replace(/\n\n/g, '<br /><br />')
              ),
            }}
          />
        )}
        {listTitle2 && (
          <h3
            className={clsx('H2', s.section__subtitle)}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(listTitle2),
            }}
          />
        )}
        {itemList2 && (
          <ul className={s.section__list}>
            {itemList2.split('\n').map((item) => (
              <li
                className={clsx('XL', s.section__item)}
                key={item}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item),
                }}
              />
            ))}
          </ul>
        )}
        {underline && <div className={s.section__underline} />}
      </div>
    </section>
  );
};

export default CardSection;