import '@/style/main.scss';

import type { Metadata } from 'next';

import Footer from '@/shared/Footer';
import Providers from '@/providers';

import HeaderWrapper from '@/shared/Header/Wrapper';

export const metadata: Metadata = {
  title: 'Оборудование из Китая',
  description:
    'Импортируем, проверяем, доставляем и оформляем «под вас» — с 2006 года. Вы получаете надёжного партнёра, выгодные цены и полное сопровождение.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Оборудование из Китая',
    description:
      'Импортируем, проверяем, доставляем и оформляем «под вас» — с 2006 года. Вы получаете надёжного партнёра, выгодные цены и полное сопровождение.',
    url: 'https://kamchatka-china-bridge.ru',
    siteName: 'Оборудование из Китая',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/rocket.svg',
        width: 1200,
        height: 630,
        alt: 'Оборудование из Китая',
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='ru'>
    <body>
      <Providers>
        <HeaderWrapper />
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
