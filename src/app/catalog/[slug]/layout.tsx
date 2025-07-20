import sql from '@/lib/db';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/shared/Hero'));
const FormSection = dynamic(() => import('@/shared/Form'));

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const [type] =
    await sql`SELECT name FROM type WHERE slug = ${slug} LIMIT 1`;

  const heroTitle = type ? type.name : 'Каталог оборудования';

  return (
    <>
      <HeroSection
        title={heroTitle}
        capture='Компания &lsquo;Китайско-Российский Золотой Мост&rsquo; представляет каталог китайского оборудования. Для&nbsp;удобства вы&nbsp;можете воспользоваться поиском по&nbsp;каталогу. Если вы&nbsp;не&nbsp;нашли желаемого оборудования, то&nbsp;свяжитесь с&nbsp;нами прямо сейчас и&nbsp;мы&nbsp;подберем для вас желаемое оборудование в&nbsp;Китае.'
      />
      <main className='container'>
        {children}
        <FormSection
          title='Нужна помощь с&nbsp;выбором?'
          capture='Свяжитесь с&nbsp;нашими специалистами, они предоставят вам бесплатную консультацию и&nbsp;помогут сделать правильный выбор'
        />
      </main>
    </>
  );
};

export default Layout;
