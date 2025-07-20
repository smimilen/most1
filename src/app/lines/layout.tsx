import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/shared/Hero'));
const FormSection = dynamic(() => import('@/shared/Form'));

export default function LinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSection
        title='Линии из&nbsp;Китая'
        capture='Наша компания специализируется на&nbsp;поставке производственных линий из&nbsp;Китая в&nbsp;Россию и&nbsp;страны СНГ, в&nbsp;соответствии с&nbsp;запросами наших клиентов. Наши специалисты помогут Вам подобрать нужного китайского производителя.'
      />
      <main className='container'>
        {children}
        <FormSection
          title='Какая линия вам нужна?'
          capture='Если вы&nbsp;не&nbsp;нашли интересующий вас линию, то&nbsp;обратитесь в&nbsp;нашу компанию и&nbsp;наши специалисты найдут в&nbsp;Китае для вас любую производственную линию.'
        />
      </main>
    </>
  );
}
