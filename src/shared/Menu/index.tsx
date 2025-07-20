'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Button from '@/ui/Button';
import s from './index.module.scss';

const linksList = [
  { capture: 'Каталог', path: 'catalog' },
  { capture: 'Линии', path: 'lines' },
  { capture: 'Заводы', path: 'factories' },
  { capture: 'Техника', path: 'technique' },
  { capture: 'Контакты', path: 'contacts' },
];

type MenuProps = {
  isLight?: boolean;
  isCollapsed?: boolean;
  className?: string;
};

const Menu = ({
  isLight = true,
  isCollapsed = false,
  className,
}: MenuProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        s.nav,
        {
          [s.nav_collapsed]: isCollapsed,
        },
        className
      )}
    >
      {linksList.map(({ capture, path }) => (
        <Link href={`/${path}`} key={path}>
          <Button
            variant='vacuum'
            sizeBtn='medium'
            isActive={pathname.includes(path) }
            className={clsx(s.nav__btn, {
              [s.nav__btn_light]: isLight,
            })}
          >
            {capture}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
