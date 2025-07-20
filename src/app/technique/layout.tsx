import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/shared/Hero'));
const FormSection = dynamic(() => import('@/shared/Form'));

const LinesLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <HeroSection
      title='Спецтехника из&nbsp;Китая'
      capture='Наша компания предлагает современную спецтехнику из&nbsp;Китая напрямую от&nbsp;заводов производителей без посредников.'
    />
    <main className='container'>
      {children}
      <FormSection
        title='Какая спецтехника вам нужна?'
        capture='Если вы&nbsp;не&nbsp;нашли интересующий вас спецтехнику, то&nbsp;обратитесь в&nbsp;нашу компанию и&nbsp;наши специалисты найдут в&nbsp;Китае для вас любую спецтехнику.'
      />
    </main>
  </>
);

export default LinesLayout;
