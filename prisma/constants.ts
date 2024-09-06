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
    imageUrl: '/burgers/big_chicken_burger_garlic.webp',
    categoryId: 1,
  },
  {
    name: 'Чикен Премьер Карри',
    imageUrl: '/burgers/chicken_premier_curry.webp',
    categoryId: 1,
  },
  {
    name: 'Римский Бургер',
    imageUrl: '/burgers/rome_burger.webp',
    categoryId: 1,
  },
  {
    name: 'Биг Чикен Бургер',
    imageUrl: '/burgers/big_chicken_burger.webp',
    categoryId: 1,
  },
  // {
  //   name: 'Биг Хит',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/d00/qan9y8u5g9hl37j1yi56otk7ehgqsjid/large.png',
  //   categoryId: 1,
  // },
  // {
  //   name: 'Двойной Биг Хит',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/d20/5dtzo13mtatem51js0qb38usodoq17tv/large.png',
  //   categoryId: 1,
  // },
  // {
  //   name: 'Гранд',
  //   imageUrl: '/burgers/grand.webp',
  //   categoryId: 1,
  // },
  {
    name: 'Гранд Де Люкс',
    imageUrl: '/burgers/grand_deluxe.webp',
    categoryId: 1,
  },
  // {
  //   name: 'Двойной Гранд',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/aec/rfi15u1fc9exvvrnxib983mqyxbq1f05/large.png',
  //   categoryId: 1,
  // },
  // {
  //   name: 'Биг Спешиал',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/6fe/xpn3tahb353srv8ku7xgd4kints70xod/large.png',
  //   categoryId: 1,
  // },
  // {
  //   name: 'Двойной Биг Спешиал',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/7db/obi33b1f1y38vqzlkcji6jnnubl8mmco/large.png',
  //   categoryId: 1,
  // },
  {
    name: 'Гамбургер',
    imageUrl: '/burgers/gamburger.webp',
    categoryId: 1,
  },
  // {
  //   name: 'Чизбургер',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/e01/ioyvnnsr1i353xb5bpr5jrwhwsi1qyxw/large.png',
  //   categoryId: 1,
  // },
  // {
  //   name: 'Двойной Чизбургер',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/53f/81qwloswzmu1lejjihsn8qrf1ofwl3o1/large.png',
  //   categoryId: 1,
  // },
  {
    name: 'Чикенбургер',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/0c1/fpked6dlsksof3097mz6ydgw8mtxwu0w/large.png',
    categoryId: 1,
  },
  // {
  //   name: 'Фишбургер',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/eaa/vf45rydkmdpvswwv16tnd0qmuvqpsx7y/large.png',
  //   categoryId: 1,
  // },
  // {
  //   name: 'Двойной Фишбургер',
  //   imageUrl:
  //     'https://vkusnoitochka.ru/resize/290x286/upload/iblock/35c/s0qf0mx3jm31l1yvb2xzg4bdvbwss5lz/large.png',
  //   categoryId: 1,
  // },
  {
    name: 'Цезарь Ролл',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/22f/vu493e5k7kjjn7kyx0rerc80olsxyz8v/large.png',
    categoryId: 1,
  },
  {
    name: 'Шримп Ролл',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/b27/54tpd0190mb8b0sbo75zjtafvqs1f5nx/large.png',
    categoryId: 1,
  },
  {
    name: 'Биг Спешиал Ролл',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/ea2/ucmzg58dcp1rj49b0rzrx1uy1zbt8mtq/large.png',
    categoryId: 1,
  },
  {
    name: 'Лимонад Капри',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/37b/anlxeo5fur93tt0z4da7qtsqbrxgs06y/large.png',
    categoryId: 3,
  },
  {
    name: 'Санрайз Малина-ежевика',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/8a1/dagexfrrmi7e83i0odx8i6cm0w0dq1zw/large.png',
    categoryId: 3,
  },
  {
    name: 'Яблочный Шорли',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/27d/k8lmmbj2f7jtql61muqrp3buerl84h33/large.png',
    categoryId: 3,
  },
  {
    name: 'Молочный коктейль Папайя-манго',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/501/b30q21kpifqyo1frj822naql8an6ha6k/large.png',
    categoryId: 3,
  },
  {
    name: 'Флэт Уайт',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/803/e37kgmdqlza03p49vqt0t13y6zjgtqg7/large.png',
    categoryId: 4,
  },
  {
    name: 'Айс Кофе Лесной Орех',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/24d/v7yv1ezdydot13i54lq37ak63clrhy97/large.png',
    categoryId: 4,
  },
  {
    name: 'Айс Кофе Лесной орех на миндальной основе',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/613/b0uoj8d87desshbp002gwrqo1xgej2v4/large.png',
    categoryId: 4,
  },
  {
    name: 'Эспрессо-тоник',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/3ad/ugaew1l3zd98hj88qo9ormue6bpw11e6/large.png',
    categoryId: 4,
  },
  {
    name: 'Лимонный тарт',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/8d6/qk8ei30k1qirji55iqdt23mnddv00p0w/large.png',
    categoryId: 5,
  },
  {
    name: 'Торт Шоколадный',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/1a1/03rng2ebznvxczyp1snimi84byjb1l6d/large.png',
    categoryId: 5,
  },
  {
    name: 'Клубничный Чизкейк',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/0e6/avfr5bn27z8twmfj10nx44bzw3fqhu8w/large.png',
    categoryId: 5,
  },
  {
    name: 'Тирамису',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/3e9/g73o77ga40hh60sbojqbpo7buffsixn9/large.png',
    categoryId: 5,
  },
  {
    name: 'Чизкейк Классический',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/b55/a4fpwfe0hsvatligkj0b01xssqsk19wd/large.png',
    categoryId: 5,
  },
  {
    name: 'Вафельный рожок',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/1de/ot4drswog7lu32gl7c9oq3hyvfedv0jl/large.png',
    categoryId: 5,
  },
  {
    name: 'Пирожок Вишнёвый',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/160/7xk38ekbvhebg8tdb3pxg8qulx2ij26u/large.png',
    categoryId: 5,
  },
  {
    name: 'Мороженое Карамельное',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/805/d4pm2ulyng47scuu48i1cioomz0a3y21/large.png',
    categoryId: 5,
  },
  {
    name: 'Мороженое Клубничное',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/9c8/fa64iufx1kilhwfsxnstdiudlerfrzwl/large.png',
    categoryId: 5,
  },
  {
    name: 'Мороженое Шоколадное',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/c05/6w74zohdl0edxs9w9xpczhd3qucm6az0/large.png',
    categoryId: 5,
  },
  {
    name: 'Соус Сырный',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/8eb/gxss96kf2gu8mq7yxz9jlg3a7b11jmfj/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Кисло-сладкий',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/670/aozhjkgmdnls9g0qwmc9k05g8pp48dvq/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Терияки',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/1c4/1qtwzythy071w4q229ac9cruhp596og3/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Чесночный',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/e8c/5s0d80wv0pi6gt3g7zinpv0q4gfzy4oa/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Кетчуп',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/b17/xl5e2lxc2dv61a434zlpyl82xot0eg3v/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Горчичный',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/114/p1lkou4qvhkmdyy9qp37satjivi518ni/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Барбекю',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/624/rca7k3dibowo1qklgh2ry3fqpe0qwyvi/large.png',
    categoryId: 6,
  },
  {
    name: 'Соус Цезарь',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/325/712yj6dwv5h3xo837st48kf7pn6ifrsq/large.png',
    categoryId: 6,
  },
  {
    name: 'Оливковое масло',
    imageUrl:
      'https://vkusnoitochka.ru/resize/290x286/upload/iblock/451/6mlwqjlqm41jvw7hz5vyuqg7o3zmwvjh/large.png',
    categoryId: 6,
  },
];
