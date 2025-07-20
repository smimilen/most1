import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/shared/Hero'));
const FormSection = dynamic(() => import('@/shared/Form'));

const FactoriesLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <HeroSection
      title='Заводы и&nbsp;мини заводы из&nbsp;Китая'
      capture='Компания &laquo;Китайско-Российский Золотой Мост&raquo; осуществляет прямые поставки заводов и&nbsp;мини заводов из&nbsp;Китая в&nbsp;Россию и&nbsp;страны СНГ.'
    />
    <main className='container'>
      {children}
      <FormSection
        title='Какой завод вам нужен?'
        capture='Если вы&nbsp;не&nbsp;нашли интересующий вас завод, то&nbsp;обратитесь в&nbsp;нашу компанию и&nbsp;наши специалисты найдут в&nbsp;Китае для вас любой завод.'
      />
    </main>
  </>
);

export default FactoriesLayout;