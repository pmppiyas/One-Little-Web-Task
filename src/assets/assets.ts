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
import { Service } from '@/interface/interface';

export const assets = {
  logo,
  air,
  b,
  owl,
  v,
  blob,
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
