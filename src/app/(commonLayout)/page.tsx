import Carousel from '@/app/components/home/Carousel';
import ContactSection from '@/app/components/home/ContactSection';
import FAQ from '@/app/components/home/FAQ';
import Footer from '@/app/components/home/Footer';
import GettingStart from '@/app/components/home/GettingStart';
import Hero from '@/app/components/home/Hero';
import OurService from '@/app/components/home/OurService';
import OurTool from '@/app/components/home/OurTool';
import Pricing from '@/app/components/home/Pricing';
import ReviewCarousel from '@/app/components/home/ReviewCarousel';
import WhyChooseUs from '@/app/components/home/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <OurService />
      <Pricing />
      <OurTool />
      <GettingStart />
      <WhyChooseUs />
      <ReviewCarousel />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
