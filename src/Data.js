import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
  {
    id: '0',
    href: '#home',
    text: 'home',
  },
  { id: '2', href: '#about', text: 'about' },
  { id: '3', href: '#services', text: 'services' },
  { id: '1', href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: '1', href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: '2', href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: '3', href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: '1',
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: '2',
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: '3',
    icon: 'fas fa-socks fa-fw',
    title: 'amazing confort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const tours = [
  {
    id: '1',
    title: 'Tibet Adventure',
    date: 'august 26th, 2020',
    img: tour1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place: 'China',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: '2',
    title: 'best of java',
    date: 'october 1th, 2020',
    img: tour2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    place: 'Indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: '3',
    title: 'explore hong kong',
    date: 'september 15th, 2020',
    img: tour3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place: 'Hong kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: '4',
    title: 'kenya highlights',
    date: 'december 5th, 2019',
    img: tour4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place: 'Kenya',
    duration: '20 days',
    price: 'from $3300',
  },
];