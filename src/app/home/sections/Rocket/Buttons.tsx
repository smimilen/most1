'use client';

import { FC } from 'react';
import Button from '@/ui/Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';

const Buttons: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const sizeBtn = isMobile ? 'medium' : 'large';

  return (
    <>
      <Link href={'/catalog'}>
        <Button variant='vacuum' icon='arrow' sizeBtn={sizeBtn}>
          Смотреть каталог
        </Button>
      </Link>
      <Button scroll sizeBtn={sizeBtn}>
        Оставить заявку
      </Button>
    </>
  );
};

export default Buttons;
