'use client';

import { FC } from 'react';
import Button from '@/ui/Button';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Buttons: FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const sizeBtn = isMobile ? 'long' : 'large';

  const pathname = usePathname();

  return (
    <>
      {!(pathname.includes('catalog') && !pathname.includes('catalog/')) && (
        <Link href={'/catalog'}>
          <Button sizeBtn={sizeBtn} variant='outline' icon='arrow'>
            Смотреть каталог
          </Button>
        </Link>
      )}

      <Button sizeBtn={sizeBtn} scroll>
        Оставить заявку
      </Button>
    </>
  );
};

export default Buttons;
