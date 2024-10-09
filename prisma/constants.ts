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
    imageUrl: '/ingredients/chicken_patty.png',
  },
  {
    name: 'Салат Айсберг',
    price: 79,
    imageUrl: '/ingredients/iceberg.png',
  },
  {
    name: 'Бекон',
    price: 79,
    imageUrl: '/ingredients/bacon.png',
  },
  {
    name: 'Сыр плавленный',
    price: 89,
    imageUrl: '/ingredients/melted_cheese.png',
  },
  {
    name: 'Соль с Перцем',
    price: 89,
    imageUrl: '/ingredients/salt_pepper.png',
  },
  {
    name: 'Лук',
    price: 50,
    imageUrl: '/ingredients/onion.png',
  },
  {
    name: 'Острый перец Халапеньо',
    price: 89,
    imageUrl: '/ingredients/jalapeno.png',
  },
  {
    name: 'Огурец маринованный',
    price: 89,
    imageUrl: '/ingredients/pickles.png',
  },
  {
    name: 'Рукола',
    price: 110,
    imageUrl: '/ingredients/arugula.png',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: '/ingredients/tomatoes.png',
  },
  {
    name: 'Кетчуп',
    price: 49,
    imageUrl: '/ingredients/ketchup.webp',
  },
  {
    name: 'Рыбная котлета',
    price: 110,
    imageUrl: '/ingredients/fish_patty.png',
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
