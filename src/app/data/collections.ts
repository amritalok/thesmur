// data/collections.ts

export interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
}

export interface Collection {
  id: number;
  category: string;
  title: string;
  description?: string;
  imageUrl: string;
  items: CollectionItem[];
}

const collections: Collection[] = [
  {
    id: 1,
    category: 'indian',
    title: 'Indian',
    description: 'A tribute to timeless traditions and intricate artistry inspired by the richness of Indian culture.',
    imageUrl: '/india_img/india.jpg',
    items: [
      {
        id: 101,
        name: 'Sitaara',
        imageUrl: '/india_img/sitaara.JPEG',
        //description: 'An elegant necklace featuring intricate details.',
      },
      {
        id: 102,
        name: 'Virika',
        imageUrl: '/india_img/virika.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 103,
        name: 'Nalini',
        imageUrl: '/india_img/nalini.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 104,
        name: 'Ashvini',
        imageUrl: '/india_img/ashvini.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 105,
        name: 'Kalash',
        imageUrl: '/india_img/kalash.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 106,
        name: 'Rajasi',
        imageUrl: '/india_img/rajasi.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 107,
        name: 'Rudraani',
        imageUrl: '/india_img/rudraani.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 108,
        name: 'Samira',
        imageUrl: '/india_img/samira.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 109,
        name: 'Kanaka',
        imageUrl: '/india_img/kanaka.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 110,
        name: 'Aavani',
        imageUrl: '/india_img/aavani.JPEG',
        //description: 'An elegant necklace featuring intricate details.',
      },
      {
        id: 111,
        name: 'Alara',
        imageUrl: '/india_img/alara.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 112,
        name: 'Aaravi',
        imageUrl: '/india_img/aaravi.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 113,
        name: 'Mohini',
        imageUrl: '/india_img/mohini.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 114,
        name: 'Ketaki in Green',
        imageUrl: '/india_img/ketakiG.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 115,
        name: 'Ketaki in Maroon',
        imageUrl: '/india_img/ketakiR.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 116,
        name: 'Noor in Beige',
        imageUrl: '/india_img/noor1.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 117,
        name: 'Noor in Maroon',
        imageUrl: '/india_img/noor2.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 118,
        name: 'Ruhani',
        imageUrl: '/india_img/ruhani.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 119,
        name: 'Mohini',
        imageUrl: '/india_img/mohini.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
      {
        id: 120,
        name: 'Sayuri',
        imageUrl: '/india_img/sayuri.JPEG',
        //description: 'Stunning earrings that capture traditional beauty.',
      },
    ],
  },
  {
    id: 2,
    category: 'santorini',
    title: 'Santorinian',
    description: 'Clean lines, blue hues, sunlit sparkle and luminous pearls that echo the Aegean’s serene beauty.',
    imageUrl: '/santorini_img/santorini.jpg',
    items: [
      {
        id: 201,
        name: 'Calista',
        imageUrl: '/santorini_img/calista.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 202,
        name: 'Elysia',
        imageUrl: '/santorini_img/elysia.JPEG',
        //description: 'A stylish ring perfect for any occasion.',
      },
      {
        id: 203,
        name: 'Maristela',
        imageUrl: '/santorini_img/maristela.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 204,
        name: 'Nerina',
        imageUrl: '/santorini_img/nerina.JPEG',
        //description: 'A stylish ring perfect for any occasion.',
      },
      {
        id: 205,
        name: 'Ondina',
        imageUrl: '/santorini_img/ondina.JPEG',
        //description: 'A stylish ring perfect for any occasion.',
      },
    ],
  },
  {
    id: 3,
    category: 'boston',
    title: 'Bostanian',
    description: 'Classic charm and historic elegance pieces inspired by timeless architecture and city sophistication.',
    imageUrl: '/boston_img/boston.jpg',
    items: [
      {
        id: 301,
        name: 'Charles Hoop',
        imageUrl: '/boston_img/charles.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 302,
        name: 'Beacon Hoop',
        imageUrl: '/boston_img/beacon.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 303,
        name: ' Fenway Hoop',
        imageUrl: '/boston_img/fenway.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
    ],
  },
  {
    id: 4,
    category: 'hawaii',
    title: 'Hawaiian',
    description:
      'Laid-back elegance with a touch of aloha inspired by blooming florals, island vibes, and the beauty of wildlife.',
    imageUrl: '/hawaii_img/hawaii.jpg',
    items: [
      {
        id: 401,
        name: 'Kalea',
        imageUrl: '/hawaii_img/kalea.JPEG',
        //description: 'Kalea – light, delicate, and full of change. In Hawaiian, Kalea means “joy”—and that’s exactly what this piece brings.',
      },
      {
        id: 402,
        name: 'Mana',
        imageUrl: '/hawaii_img/mana.JPEG',
        //description: 'Mana – fierce, wise, and unapologetically bold. Named after the Hawaiian concept of spiritual power, Mana is all about embracing your inner strength.',
      },
      {
        id: 403,
        name: 'Naia',
        imageUrl: '/hawaii_img/naia.JPEG',
        //description: 'Naia – playful, powerful, and deeply free. Named after the Hawaiian word for dolphin, these studs capture the grace and energy of ocean life.',
      },
    ],
  },
  {
    id: 5,
    title: 'New Yorker',
    category: 'newyork',
    description: 'Bold, modern, and effortlessly chic jewelry that mirrors the energy of the city that never sleeps.',
    imageUrl: '/ny_img/ny.jpg',
    items: [
      {
        id: 501,
        name: 'Hudson',
        imageUrl: '/ny_img/hudson.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 502,
        name: 'Madison',
        imageUrl: '/ny_img/madison.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 503,
        name: 'Soho',
        imageUrl: '/ny_img/soho.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
    ],
  },
  {
    id: 6,
    title: 'Florentini',
    category: 'florence',
    description:
      'Romantic curves and Renaissance spirit,captured in golden detail, inspired by the genius of the city’s timeless art.',
    imageUrl: '/florence_img/florence.jpg',
    items: [
      {
        id: 601,
        name: 'Arno',
        imageUrl: '/florence_img/arno.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 602,
        name: 'Duomo',
        imageUrl: '/florence_img/duomo.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 603,
        name: 'Fiorenza',
        imageUrl: '/florence_img/fiorenza.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 604,
        name: 'Luna',
        imageUrl: '/florence_img/luna.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 605,
        name: 'Medici',
        imageUrl: '/florence_img/medici.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 606,
        name: 'Uffizi',
        imageUrl: '/florence_img/uffizi.JPEG',
        //description: 'A sleek bracelet with a minimalist design.',
      },
    ],
  },
  {
    id: 7,
    title: 'Floridian',
    category: 'florida',
    description: 'Tropical energy and sunshine sparkle,vacation vibes wrapped in golden glow and beachy bliss.',
    imageUrl: '/fl_img/florida.jpg',
    items: [
      {
        id: 701,
        name: 'Dune',
        imageUrl: '/fl_img/dune.JPEG',
        // //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 702,
        name: 'Laguna',
        imageUrl: '/fl_img/laguna.JPEG',
        // //description: 'A sleek bracelet with a minimalist design.',
      },
      {
        id: 703,
        name: 'Wave',
        imageUrl: '/fl_img/wave.JPEG',
        ////description: 'A sleek bracelet with a minimalist design.',
      },
    ],
  },
  {
    id: 8,
    title: 'Washingtonian',
    category: 'washington',
    description: 'Grace, bloom, and brilliance, seasonal symbols of the capital captured in every detail.',
    imageUrl: '/washington_img/wdc.jpg',
    items: [],
  },
  {
    id: 9,
    title: 'Parisian',
    category: 'paris',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/paris_img/paris.jpg',
    items: [],
  },
  {
    id: 10,
    title: 'Qatari',
    category: 'doha',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/doha_img/doha.jpg',
    items: [],
  },
  {
    id: 11,
    title: 'Emirati',
    category: 'dubai',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/dubai_img/dubai.jpg',
    items: [],
  },
  {
    id: 12,
    title: 'Arizonan',
    category: 'arizona',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/arizona_img/arizona.jpg',
    items: [],
  },
  {
    id: 13,
    category: 'maine',
    title: 'Mainer',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/maine_img/maine.jpg',
    items: [],
  },
  {
    id: 14,
    category: 'nevada',
    title: 'Nevadan',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/nevada_img/nevada.jpg',
    items: [],
  },
  {
    id: 15,
    category: 'newhampshire',
    title: 'New Hampshirite',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/nh_img/nh.jpg',
    items: [],
  },
  {
    id: 16,
    category: 'newjersey',
    title: 'New Jerseyan',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/nj_img/nj.jpg',
    items: [],
  },
  {
    id: 17,
    title: 'New Orleanian',
    category: 'nola',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/nola_img/nola.jpg',
    items: [],
  },
  {
    id: 18,
    title: 'Utahn',
    category: 'utah',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/utah_img/utah.jpg',
    items: [],
  },
  {
    id: 19,
    category: 'positano',
    title: 'Positanesi',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/positano_img/positano.jpg',
    items: [],
  },
  {
    id: 20,
    category: 'ravello',
    title: 'Ravellesi',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/ravello_img/ravello.jpg',
    items: [],
  },
  {
    id: 21,
    category: 'ri',
    title: 'Rhode Islanders',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/ri_img/ri.jpg',
    items: [],
  },
  {
    id: 22,
    title: 'Amalfitani',
    category: 'amalfi',
    //description: 'Modern and chic matte gold pieces for a contemporary style.',
    imageUrl: '/amalfi_img/amalfi.jpg',
    items: [],
  },
];

export default collections;
