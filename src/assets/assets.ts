import logo from '@/assets/google.webp';
import air from '@/assets/air.png';
import b from '@/assets/b.png';
import owl from '@/assets/owl.png';
import v from '@/assets/v.png';
import blob from '@/assets/blob.svg';
import airbnb from '@/assets/airbnb.png';
import booking from '@/assets/booking.png';
import expedia from '@/assets/expedia.png';
import tripadvisor from '@/assets/tripadvisor.png';
import vrdo from '@/assets/vrdo.png';
import agoda from '@/assets/agoda.png';
import homeToGo from '@/assets/home-to-go.png';
import task from '@/assets/task.png';
import calender from '@/assets/calender.png';
import like from '@/assets/like.png';
import track from '@/assets/track.png';
import message from '@/assets/message.png';
import bin from '@/assets/bin.png';
import arrow from '@/assets/arrow.png';
import { Service } from '@/interface/interface';
import priceLabs from '@/assets/pricelabs.png';
import wheelHouse from '@/assets/wheel.png';
import beyond from '@/assets/beyond.png';
import hostfully from '@/assets/hostfully.png';
import guesty from '@/assets/guesty.png';
import lodgify from '@/assets/lodgify.png';
import addUser from '@/assets/adduser.png';
import users from '@/assets/users.png';
import headphone from '@/assets/headphone.png';
import man from '@/assets/man.png';

export const assets = {
  logo,
  air,
  b,
  owl,
  v,
  blob,
  arrow,
  man,
};

export const carouselLogo = [
  airbnb,
  booking,
  expedia,
  tripadvisor,
  vrdo,
  agoda,
  homeToGo,
];

export const services: Service[] = [
  {
    title: 'Manage Property Listings',
    description:
      'Take full control of your real estate portfolio with our advanced listing tools. Easily create, edit, and optimize your property details with a user-friendly interface designed to maximize visibility and attract potential buyers or renters effortlessly.',
    icon: task,
  },
  {
    title: 'Manage Customer Bookings',
    description:
      'Streamline your reservation process with our intuitive management system. From tracking real-time availability to organizing guest schedules, we provide a seamless experience that ensures no booking is missed and every customer receives top-tier service.',
    icon: calender,
  },
  {
    title: 'Schedule House Cleaning',
    description:
      'Maintain the highest standards of cleanliness for your properties with our automated scheduling system. Conveniently book professional cleaning services, track progress, and ensure your space is always guest-ready without any manual hassle.',
    icon: like,
  },
  {
    title: 'Monitor Guest Reviews',
    description:
      'Stay ahead of the competition by keeping a close eye on guest feedback. Our platform aggregates reviews and provides actionable insights, allowing you to enhance your property management strategies and build a stellar reputation in the industry.',
    icon: track,
  },
  {
    title: 'Track & Report Expenses',
    description:
      'Simplify your financial management with our comprehensive expense tracking tools. Easily record maintenance costs, utility bills, and other property-related expenses to generate detailed reports that help you optimize your budget and increase profitability.',
    icon: message,
  },
  {
    title: 'Guest Inquiry & Support',
    description:
      'Deliver exceptional customer service with our dedicated inquiry management module. Provide lightning-fast responses to potential guests, resolve issues in real-time, and ensure a smooth communication flow from the first click to the final checkout.',
    icon: bin,
  },
];

export const plans = [
  {
    name: 'Freebie',
    price: 0,
    highlighted: false,
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: false },
      { text: 'Unlimited Sharing', included: false },
      { text: 'Upload graphics & video in up to 4k', included: false },
      { text: 'Unlimited Projects', included: false },
      { text: 'Instant Access to our design system', included: false },
      { text: 'Create teams to collaborate on designs', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 25,
    highlighted: true,
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: true },
      { text: 'Unlimited Sharing', included: true },
      { text: 'Upload graphics & video in up to 4k', included: true },
      { text: 'Unlimited Projects', included: true },
      { text: 'Instant Access to our design system', included: false },
      { text: 'Create teams to collaborate on designs', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 100,
    highlighted: false,
    features: [
      { text: '20,000+ of PNG & SVG graphics', included: true },
      { text: 'Access to 100 million stock images', included: true },
      { text: 'Upload custom icons and fonts', included: true },
      { text: 'Unlimited Sharing', included: true },
      { text: 'Upload graphics & video in up to 4k', included: true },
      { text: 'Unlimited Projects', included: true },
      { text: 'Instant Access to our design system', included: true },
      { text: 'Create teams to collaborate on designs', included: true },
    ],
  },
];

export const tools = [
  priceLabs,
  wheelHouse,
  beyond,
  hostfully,
  guesty,
  lodgify,
  hostfully,
  guesty,
  lodgify,
];

export const stepIcon = {
  addUser,
  users,
  headphone,
};

export const reasons = [
  'Brilliant Client Service',
  'Flexibility & Adaptibility',
  'We make it Personal',
  'We have expert in our team',
];

export const reviews = [
  {
    id: 1,
    name: 'Jenny Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'This platform has completely transformed how I manage my Airbnb listings. The interface is intuitive and saves me hours of manual work every week.',
    highlight: false,
  },
  {
    id: 2,
    name: 'Esther Howard',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'The automated guest support feature is a lifesaver! My response rates have improved significantly, and guests often compliment the quick communication.',
    highlight: true,
  },
  {
    id: 3,
    name: 'Robert Fox',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    rating: 4,
    text: 'Great tool for tracking expenses and property performance. The detailed reports help me understand exactly where my revenue is coming from.',
    highlight: false,
  },
  {
    id: 4,
    name: 'Courtney Henry',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'I love how it integrates with all major booking platforms. No more double-bookings or calendar sync issues across my multiple properties.',
    highlight: false,
  },
  {
    id: 5,
    name: 'Cameron Williamson',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 4,
    text: 'Setting up house cleaning schedules is now completely automated. It has reduced my stress levels and ensured my guests always arrive to a spotless home.',
    highlight: false,
  },
  {
    id: 6,
    name: 'Brooklyn Simmons',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    rating: 5,
    text: 'The best investment I have made for my real estate business. The customer support team is always there to help whenever I have a question.',
    highlight: false,
  },
  {
    id: 7,
    name: 'Guy Hawkins',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    text: 'User-friendly and powerful! Even if you are not tech-savvy, you can master this system in just a few days and see immediate results.',
    highlight: true,
  },
  {
    id: 8,
    name: 'Theresa Webb',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    rating: 4,
    text: 'Monitoring guest reviews in one place is fantastic. It allows me to respond quickly to feedback and maintain a high rating on all platforms.',
    highlight: false,
  },
  {
    id: 9,
    name: 'Arlene McCoy',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 5,
    text: 'Highly recommended for property owners who want to scale their business without increasing their workload. The automation is top-notch.',
    highlight: false,
  },
  {
    id: 10,
    name: 'Jerome Bell',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    rating: 4,
    text: 'A comprehensive solution for vacation rental management. It handles everything from the first inquiry to the final checkout smoothly.',
    highlight: false,
  },
];
