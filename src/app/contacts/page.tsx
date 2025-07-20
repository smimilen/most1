import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/shared/Hero'));
const LocationSection = dynamic(() => import('./sections/Location'));
const FormSection = dynamic(() => import('@/shared/Form'));

export const generateMetadata = () => ({
  title: 'Контакты | Китайско-Российский Золотой Мост',
  description: 'Свяжитесь с нами: офисы в России и Китае, телефоны, электронная почта, адреса. Импорт оборудования из Китая — с 2006 года.',
  openGraph: {
    title: 'Контакты | Китайско-Российский Золотой Мост',
    description: 'Связь с нашими офисами в России и Китае. Поставки оборудования из Китая — помощь и консультации.',
    url: 'https://kamchatka-china-bridge.ru/contacts',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Контакты Китайско-Российский Золотой Мост',
      },
    ],
    type: 'website',
    siteName: 'Оборудование из Китая',
    locale: 'ru_RU',
  },
});

const ContactPage = () => {
  return (
    <>
      <>
        <HeroSection
          title='Контакты'
          capture='Импортируем, проверяем, доставляем и&nbsp;оформляем &laquo;под вас&raquo;&nbsp;&mdash; с&nbsp;2006&nbsp;года. Вы&nbsp;получаете надёжного партнёра, выгодные цены и&nbsp;полное сопровождение.'
        />
      </>
      <main className='container'>
        <LocationSection
          title='В России'
          coords={[53.037203, 158.648836]}
          office='Петропавловск Камчатский, Высотная 10'
          showButtons
          contacts={[
            {
              key: 'Почта:',
              value: (
                <a href='mailto:zrazhva21@icloud.com'>zrazhva21@icloud.com</a>
              ),
            },
            {
              key: 'Региональный директор:',
              value: <span>Зражва Сергей</span>,
            },
            {
              key: 'Адрес офиса:',
              value: <span>Петропавловск Камчатский, Высотная 10</span>,
            },
            {
              key: 'Телефон:',
              value: <a href='tel:+79147873341'>+7 (914) 787-33-41</a>,
            },
          ]}
        />
        <LocationSection
          title='В Китае'
          coords={[39.922478, 116.44371]}
          office='г. Пекин, район Саоян, ул. Бэйцзиван 32 корпус В — офис 18011'
          contacts={[
            {
              key: 'Генеральный директор:',
              value: <span>Лю Вэй Тао</span>,
            },
            {
              key: 'Почта:',
              value: (
                <a href='mailto:liuweitao_1@163.com'>liuweitao_1@163.com</a>
              ),
            },
            {
              key: 'Почта:',
              value: <a href='mailto:wt70@mail.ru'>wt70@mail.ru</a>,
            },
            {
              key: 'Адрес офиса:',
              value: (
                <span style={{ textAlign: 'right' }}>
                  г. Пекин, район Саоян, ул. Бэйцзиван 32 корпус&nbsp;В &mdash;
                  офис 18011
                </span>
              ),
            },
            {
              key: 'Тел:',
              value: <a href='tel:+108613910036529'>+10-(86)-139-1003-6529</a>,
            },
          ]}
        />
        <FormSection
          title='Бесплатная консультация'
          capture='Задайте любой интересующий вас вопрос нашему эксперту'
        />
      </main>
    </>
  );
};

export default ContactPage;
