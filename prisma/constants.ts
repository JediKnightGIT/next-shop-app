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
    price: 100,
    imageUrl:
      'https://w7.pngwing.com/pngs/141/792/png-transparent-ganmodoki-crepes-tea-house-frikadeller-chicken-cutlet-pork-cutlet-in-supermarket-baked-goods-food-animals-thumbnail.png',
  },
  {
    name: 'Салат Айсберг',
    price: 79,
    imageUrl:
      'https://w7.pngwing.com/pngs/732/119/png-transparent-iceberg-lettuce-salad-vegetable-fruit-cultivar-salad-leaf-vegetable-dried-fruit-food.png',
  },
  {
    name: 'Бекон',
    price: 79,
    imageUrl:
      'https://w7.pngwing.com/pngs/821/54/png-transparent-three-cooked-bacons-bacon-hamburger-steak-bacon-food-recipe-steak-thumbnail.png',
  },
  {
    name: 'Сыр плавленный',
    price: 89,
    imageUrl:
      'https://e7.pngegg.com/pngimages/698/893/png-clipart-processed-cheese-american-cheese-graphy-cheese-photography-cheese.png',
  },
  {
    name: 'Соль с Перцем',
    price: 89,
    imageUrl:
      'https://e7.pngegg.com/pngimages/949/486/png-clipart-black-pepper-condiment-salt-chebureki-seasoning-bottle-glass-white-thumbnail.png',
  },
  {
    name: 'Лук',
    price: 50,
    imageUrl:
      'https://w7.pngwing.com/pngs/913/976/png-transparent-red-onion-yellow-onion-white-onion-french-onion-soup-onion-natural-foods-food-image-file-formats-thumbnail.png',
  },
  {
    name: 'Острый перец Халапеньо',
    price: 89,
    imageUrl:
      'https://karavansochi.ru/upload/iblock/3f0/jdfysv8e1hxi7oau7e16t8xd18go0r6g/perets_khalapeno_zelenyy_rezanyy_3000ml.png',
  },
  {
    name: 'Огурец маринованный',
    price: 89,
    imageUrl:
      'https://png.pngtree.com/png-clipart/20211017/original/pngtree-pickled-cucumber-organic-agricultural-plant-png-image_6856348.png',
  },
  {
    name: 'Рукола',
    price: 110,
    imageUrl: 'https://api.yarcheplus.ru/thumbnail/740x494/14/943/14943.png',
  },
  {
    name: 'Сыр Эмменталь',
    price: 89,
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/11/07/23/18/cheese-2928704_1280.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl:
      'https://png.klev.club/uploads/posts/2024-05/png-klev-club-fqjp-p-pomidor-narezannii-png-12.png',
  },
].map((obj, index) => ({ ...obj, id: index + 1 }));

export const products = [
  {
    name: 'Биг Чикен Бургер Чесночно-сливочный',
    imageUrls: ['/burgers/big_chicken_burger_garlic.webp'],
    categoryId: 1,
  },
  {
    name: 'Чикен Премьер Карри',
    imageUrls: ['/burgers/chicken_premier_curry.webp'],
    categoryId: 1,
  },
  {
    name: 'Римский Бургер',
    imageUrls: ['/burgers/rome_burger.webp'],
    categoryId: 1,
  },
  {
    name: 'Биг Чикен Бургер',
    imageUrls: ['/burgers/big_chicken_burger.webp'],
    categoryId: 1,
  },
  {
    name: 'Гранд Де Люкс',
    imageUrls: ['/burgers/grand_deluxe.webp'],
    categoryId: 1,
  },
  {
    name: 'Гамбургер',
    imageUrls: ['/burgers/gamburger.webp'],
    categoryId: 1,
  },
  {
    name: 'Чикенбургер',
    imageUrls: ['/burgers/chickenburger.webp'],
    categoryId: 1,
  },
  {
    name: 'Цезарь Ролл',
    imageUrls: ['/burgers/cezar_roll.webp'],
    categoryId: 1,
  },
  {
    name: 'Шримп Ролл',
    imageUrls: ['/burgers/shrimp_roll.webp'],
    categoryId: 1,
  },
  {
    name: 'Биг Спешиал Ролл',
    imageUrls: ['/burgers/big_special_roll.webp'],
    categoryId: 1,
  },
  {
    name: 'Лимонад Капри',
    imageUrls: ['/drinks/kapri.webp'],
    categoryId: 3,
  },
  {
    name: 'Санрайз Малина-ежевика',
    imageUrls: ['/drinks/sunrise_malina_ezhevika.webp'],
    categoryId: 3,
  },
  {
    name: 'Яблочный Шорли',
    imageUrls: ['/drinks/apple_shorli.webp'],
    categoryId: 3,
  },
  {
    name: 'Молочный коктейль Папайя-манго',
    imageUrls: ['/drinks/milk_cocktail_papaya_mango.webp'],
    categoryId: 3,
  },
  {
    name: 'Флэт Уайт',
    imageUrls: ['/coffee/flat_white.webp'],
    categoryId: 4,
  },
  {
    name: 'Айс Кофе Лесной Орех',
    imageUrls: ['/coffee/ice_coffee_lesnoy_oreh.webp'],
    categoryId: 4,
  },
  {
    name: 'Айс Кофе Лесной орех на миндальной основе',
    imageUrls: ['/coffee/ice_coffee_lesnoy_oreh_almond.webp'],
    categoryId: 4,
  },
  {
    name: 'Двойной Эспрессо',
    imageUrls: ['/coffee/double_espresso.webp'],
    categoryId: 4,
  },
  {
    name: 'Лимонный тарт',
    imageUrls: ['/deserts/lemon_tart.webp'],
    categoryId: 5,
  },
  {
    name: 'Торт Шоколадный',
    imageUrls: ['/deserts/chocolate_cake.webp'],
    categoryId: 5,
  },
  {
    name: 'Клубничный Чизкейк',
    imageUrls: ['/deserts/strawberry_cheesecake.webp'],
    categoryId: 5,
  },
  {
    name: 'Тирамису',
    imageUrls: ['/deserts/tiramisu.webp'],
    categoryId: 5,
  },
  {
    name: 'Чизкейк Классический',
    imageUrls: ['/deserts/classic_cheesecake.webp'],
    categoryId: 5,
  },
  {
    name: 'Вафельный рожок',
    imageUrls: ['/deserts/ice_cream_cone.webp'],
    categoryId: 5,
  },
  {
    name: 'Пирожок Вишнёвый',
    imageUrls: ['/deserts/cherry_pie.webp'],
    categoryId: 5,
  },
  {
    name: 'Мороженое Карамельное',
    imageUrls: ['/deserts/caramel_ice_cream.webp'],
    categoryId: 5,
  },
  {
    name: 'Мороженое Клубничное',
    imageUrls: ['/deserts/strawberry_ice_cream.webp'],
    categoryId: 5,
  },
  {
    name: 'Мороженое Шоколадное',
    imageUrls: ['/deserts/chocolate_ice_cream.webp'],
    categoryId: 5,
  },
  {
    name: 'Соус Сырный',
    imageUrls: ['/sauces/cheese.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Кисло-сладкий',
    imageUrls: ['/sauces/sweet_and_sour.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Терияки',
    imageUrls: ['/sauces/teriyaki.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Чесночный',
    imageUrls: ['/sauces/garlic.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Кетчуп',
    imageUrls: ['/sauces/ketchup.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Горчичный',
    imageUrls: ['/sauces/mustard.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Барбекю',
    imageUrls: ['/sauces/bbq.webp'],
    categoryId: 6,
  },
  {
    name: 'Соус Цезарь',
    imageUrls: ['/sauces/cezar.webp'],
    categoryId: 6,
  },
  {
    name: 'Оливковое масло',
    imageUrls: ['/sauces/olive_oil.webp'],
    categoryId: 6,
  },
];
