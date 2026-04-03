import Carousel from '@/app/components/home/Carousel';
import Hero from '@/app/components/home/Hero';
import OurService from '@/app/components/home/OurService';
import Pricing from '@/app/components/home/Pricing';

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <OurService />
      <Pricing />
    </div>
  );
}
