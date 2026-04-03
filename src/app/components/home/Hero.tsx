import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
      linear-gradient(rgba(244,63,94,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(244,63,94,0.1) 1px, transparent 1px)
    `,
          backgroundSize: '60px 60px',
          backgroundColor: 'transparent',
        }}
      />

      {/* Svg (center-based layout) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image src={assets.blob} alt="Blob" width={800} height={800} />
      </div>

      {/* Floating Icons Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full max-w-6xl mx-auto">
          <div className="absolute top-[15%] left-[10%] md:left-[5%] animate-float">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FF5A5F] rounded-2xl flex items-center justify-center shadow-2xl -rotate-12">
              <Image src={assets.air} alt="Airbnb" width={64} height={64} />
            </div>
          </div>

          <div className="absolute top-[20%] right-[10%] md:right-[5%] animate-float [animation-delay:2s]">
            <div className="w-14 h-14 md:w-18 md:h-18 bg-[#003580] rounded-2xl flex items-center justify-center shadow-2xl rotate-12">
              <Image src={assets.b} alt="booking" width={64} height={64} />
            </div>
          </div>

          <div className="absolute bottom-[20%] left-[15%] md:left-[8%] animate-float [animation-delay:4s]">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1A1F2B] rounded-2xl flex items-center justify-center shadow-2xl rotate-6">
              <Image src={assets.v} alt="Airbnb" width={44} height={30} />
            </div>
          </div>

          <div className="absolute bottom-[20%] right-[15%] md:right-[10%] animate-float [animation-delay:1s]">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#34E0A1] rounded-2xl flex items-center justify-center shadow-2xl -rotate-6">
              <Image src={assets.owl} alt="Airbnb" width={52} height={52} />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
          Airbnb Assistants For
          <span className="block text-4xl opacity-90">Property Management</span>
        </h1>

        <p className="text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button className="bg-primary text-background px-5 py-5 rounded-sm font-medium hover:bg-primary/90 transition-all active:scale-95 flex gap-2 items-center">
            Schedule A Meeting <ArrowRight size={18} />
          </Button>

          <button className="text-accent-foreground underline hover:text-primary">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
