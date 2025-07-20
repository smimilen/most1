'use client';

import Header from './';
import { usePathname } from 'next/navigation';

const HeaderWrapper = () => {
  const pathname = usePathname();
  const isLight = !pathname.includes('/home');

  return <Header isLight={isLight} />;
};

export default HeaderWrapper;
