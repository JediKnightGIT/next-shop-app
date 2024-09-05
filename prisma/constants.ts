export const categories = [
  {
    name: 'Бургеры и роллы',
  },
  {
    name: 'Комбо',
  },
  {
    name: 'Напитки',
  },
  {
    name: 'Кофе',
  },
  {
    name: 'Десерты',
  },
  {
    name: 'Соусы и другое',
  },
];

export const ingredients = [
  {
    name: 'Куриная котлета',
    price: '100',
    imageUrl:
      'https://w7.pngwing.com/pngs/141/792/png-transparent-ganmodoki-crepes-tea-house-frikadeller-chicken-cutlet-pork-cutlet-in-supermarket-baked-goods-food-animals-thumbnail.png',
  },
  {
    name: 'Салат Айсберг',
    price: '79',
    imageUrl:
      'https://w7.pngwing.com/pngs/732/119/png-transparent-iceberg-lettuce-salad-vegetable-fruit-cultivar-salad-leaf-vegetable-dried-fruit-food.png',
  },
  {
    name: 'Бекон',
    price: '79',
    imageUrl:
      'https://w7.pngwing.com/pngs/821/54/png-transparent-three-cooked-bacons-bacon-hamburger-steak-bacon-food-recipe-steak-thumbnail.png',
  },
  {
    name: 'Сыр плавленный',
    price: '89',
    imageUrl:
      'https://e7.pngegg.com/pngimages/698/893/png-clipart-processed-cheese-american-cheese-graphy-cheese-photography-cheese.png',
  },
  {
    name: 'Соль с Перцем',
    price: '89',
    imageUrl:
      'https://e7.pngegg.com/pngimages/949/486/png-clipart-black-pepper-condiment-salt-chebureki-seasoning-bottle-glass-white-thumbnail.png',
  },
  {
    name: 'Лук',
    price: '50',
    imageUrl:
      'https://w7.pngwing.com/pngs/913/976/png-transparent-red-onion-yellow-onion-white-onion-french-onion-soup-onion-natural-foods-food-image-file-formats-thumbnail.png',
  },
  {
    name: 'Острый перец Халапеньо',
    price: '89',
    imageUrl:
      'https://karavansochi.ru/upload/iblock/3f0/jdfysv8e1hxi7oau7e16t8xd18go0r6g/perets_khalapeno_zelenyy_rezanyy_3000ml.png',
  },
  {
    name: 'Огурец маринованный',
    price: '89',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20211017/original/pngtree-pickled-cucumber-organic-agricultural-plant-png-image_6856348.png',
  },
  {
    name: 'Рукола',
    price: '110',
    imageUrl: 'https://api.yarcheplus.ru/thumbnail/740x494/14/943/14943.png',
  },
  {
    name: 'Сыр Эмменталь',
    price: '89',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/11/07/23/18/cheese-2928704_1280.png',
  },
  {
    name: 'Свежие томаты',
    price: '59',
    imageUrl:
      'https://png.klev.club/uploads/posts/2024-05/png-klev-club-fqjp-p-pomidor-narezannii-png-12.png',
  },
].map((obj, index) => ({ ...obj, id: index + 1 }));
