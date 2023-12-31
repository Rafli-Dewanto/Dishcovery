import exploreSvg from '@/assets/svg/explore.svg';
import createSvg from '@/assets/svg/create.svg';
import enjoySvg from '@/assets/svg/enjoy.svg';

export const teams = [
  {
    name: 'Alvina Larasati Winarso',
    npm: '50421132',
    src: 'https://media.licdn.com/dms/image/D5603AQHBHtMOE-Orgg/profile-displayphoto-shrink_400_400/0/1693394713382?e=1704326400&v=beta&t=8qzL-gTNPg8_VD1Dldtgcz7ueNc73nU7-i3cN2nrJhQ',
  },
  {
    name: 'Azmii Wahyu Indriati',
    npm: '50421249',
    src: 'https://media.licdn.com/dms/image/C5603AQHje_NTwhtHgw/profile-displayphoto-shrink_400_400/0/1642601955517?e=1704326400&v=beta&t=H3xcBpwyF-G6ksjIv6u7ZVtdbAWbO7vqrvX1VmDklwQ',
  },
  {
    name: 'Chisilia Amanda Wahyudi',
    npm: '50421308',
    src: 'https://media.licdn.com/dms/image/D5603AQEyQtkmXTyMUw/profile-displayphoto-shrink_400_400/0/1665631935476?e=1704326400&v=beta&t=-MJnSlNWiFc5eusn-obez5KS-VEqiEOtuGJvSJ9OKZ8',
  },
  {
    name: 'Farhan Maulana',
    npm: '50421476',
    src: 'https://media.licdn.com/dms/image/C4E03AQGArxaImjaM0g/profile-displayphoto-shrink_400_400/0/1642603416478?e=1704326400&v=beta&t=C-6QDtxwJkCn8AZJ_CkVj9ehAMe1ml_wVnazc4TCwdw',
  },
  {
    name: 'Haikal Muhamad Putra Pratama Harimurti',
    npm: '50421584',
    src: 'https://i0.wp.com/www.resumesetc.com.au/wp-content/uploads/2017/10/blank-profile-picture-973460.png?fit=1920%2C1920&ssl=1',
  },
  {
    name: 'Mario Martua Aditia',
    npm: '50421780',
    src: 'https://i0.wp.com/www.resumesetc.com.au/wp-content/uploads/2017/10/blank-profile-picture-973460.png?fit=1920%2C1920&ssl=1',
  },
  {
    name: 'Rafli Satya Dewanto',
    npm: '51421208',
    src: 'https://media.licdn.com/dms/image/D5603AQEljt1TTN_XTA/profile-displayphoto-shrink_400_400/0/1698132288654?e=1709164800&v=beta&t=IQ7nZP885ecVMHjGkGRvCTy6mOlXZUNgCzIC9TwPU8k',
  },
  {
    name: 'Rasya Rachman Hakim',
    npm: '51421259',
    src: 'https://media.licdn.com/dms/image/C4D03AQEGuwKhZd1o1w/profile-displayphoto-shrink_400_400/0/1642602443390?e=1704326400&v=beta&t=3UfP8vQXnvme3bEcYqtWtb_EdTYMoGtLgkiL6Mn4760',
  },
  {
    name: 'Wardiansyah Fauzi Abdillah',
    npm: '51421514',
    src: 'https://media.licdn.com/dms/image/D5603AQHAAnWzc38Pow/profile-displayphoto-shrink_400_400/0/1698143495181?e=1704326400&v=beta&t=lOITDTcGqUhXOy3M-quTepG9yZEiU2bqThH-ByU3VfQ',
  },
  {
    name: 'Zaidan Abhinoya Athayumna',
    npm: '51421555',
    src: 'https://media.licdn.com/dms/image/C5603AQEGVIkFhOatEg/profile-displayphoto-shrink_400_400/0/1642600205245?e=1704326400&v=beta&t=Z9NxPIe6ys_QdmGvvv2hS0wpoLh14v5MW8ISbu_-WEM',
  },
] as const;

export const usecases = [
  {
    title: 'Explore',
    image: exploreSvg,
    alt: 'explore recipe',
    description:
      'Discover a wide array of recipes from various cuisines and categories. Find new inspiration for your next meal!',
  },
  {
    title: 'Create & Share',
    image: createSvg,
    alt: 'create recipe',
    description:
      'Craft your own unique recipes, share your culinary creations, and contribute to the community with your cooking expertise.',
  },
  {
    title: 'Cook & Enjoy',
    image: enjoySvg,
    alt: 'enjoy',
    description:
      'Follow step-by-step guides, prepare delightful dishes, and savor the joy of cooking and relishing delicious homemade meals.',
  },
] as const;
