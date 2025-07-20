import dynamic from 'next/dynamic';

const RocketSection = dynamic(() => import('./sections/Rocket'));
const OptionsSection = dynamic(() => import('./sections/Options'));
const HeroSection = dynamic(() => import('./sections/Hero'));
const OfficesSection = dynamic(() => import('./sections/Offices'));
// const FeedbackSection = dynamic(() => import('./sections/Feedback'));
const DirectionsSection = dynamic(() => import('./sections/Directions'));
const PathSection = dynamic(() => import('./sections/Path'));
const FormSection = dynamic(() => import('@/shared/Form'));

export const generateMetadata = () => ({
  title: 'Оборудование из Китая — Импорт, доставка, гарантия',
  description:
    'Импортируем и поставляем оборудование, производственные линии, заводы и спецтехнику из Китая под ключ. 19 лет опыта, выгодные цены, полное сопровождение.',
  openGraph: {
    title: 'Оборудование из Китая — Импорт и поставка',
    description:
      'Китайско-Российский Золотой Мост — прямые поставки техники, заводов, линий из Китая. Оформление, доставка, гарантия.',
    url: 'https://kamchatka-china-bridge.ru/',
    images: [
      {
        url: '/images/rocket.svg',
        width: 1200,
        height: 630,
        alt: 'Оборудование из Китая',
      },
    ],
    type: 'website',
    siteName: 'Оборудование из Китая',
    locale: 'ru_RU',
  },
});

const Home = () => {
  return (
    <main className='container'>
      <RocketSection />
      <OptionsSection />
      <HeroSection />
      <OfficesSection />
      {/* <FeedbackSection /> */}
      <DirectionsSection />
      <PathSection />
      <FormSection
        title='Бесплатная консультация'
        capture='Задайте любой интересующий вас вопрос нашему эксперту'
      />
    </main>
  );
};

export default Home;
