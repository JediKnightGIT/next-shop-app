import { Container, Filters, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все продукты" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список продуктов */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список продуктов</div>
          </div>
        </div>
      </Container>
    </>
  );
}
