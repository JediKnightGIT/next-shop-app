import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

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
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Бургеры и роллы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Биг Чикен Бургер Чесночно-сливочный',
                    price: 289,
                    imageUrl:
                      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/3c0/o95xcxjdfc4nf1a30n2cq1kz336z8yna/large.png',
                    count: 1,
                    items: [{ price: 289 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 2,
                    name: 'Биг Чикен Бургер Чесночно-сливочный',
                    price: 289,
                    imageUrl:
                      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/3c0/o95xcxjdfc4nf1a30n2cq1kz336z8yna/large.png',
                    count: 1,
                    items: [{ price: 289 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
