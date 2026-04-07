import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-150 md:min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Blob Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-200 flex items-center justify-center">
          <Image
            src={assets.blob}
            alt="Blob"
            fill
            className="object-contain opacity-50 md:opacity-100"
          />
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <div className="absolute top-[10%] left-[5%] md:top-[15%] md:left-[10%] animate-float">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-[#FF5A5F] rounded-2xl flex items-center justify-center shadow-2xl -rotate-12 border-4 border-white/10">
              <Image
                src={assets.air}
                alt="Airbnb"
                width={60}
                height={60}
                className="p-2"
              />
            </div>
          </div>

          {/* Top Right - Booking */}
          <div className="absolute top-[12%] right-[5%] md:top-[15%] md:right-[10%] animate-float [animation-delay:2s]">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-[#003580] rounded-2xl flex items-center justify-center shadow-2xl rotate-12 border-4 border-white/10">
              <Image
                src={assets.b}
                alt="booking"
                width={60}
                height={60}
                className="p-2"
              />
            </div>
          </div>

          {/* Bottom Left - Vrbo */}
          <div className="absolute bottom-[10%] left-[5%] md:bottom-[20%] md:left-[12%] animate-float [animation-delay:4s]">
            <div className="w-12 h-12 md:w-18 md:h-18 bg-[#1A1F2B] rounded-2xl flex items-center justify-center shadow-2xl rotate-6 border-4 border-white/10">
              <Image
                src={assets.v}
                alt="Vrbo"
                width={40}
                height={30}
                className="p-2"
              />
            </div>
          </div>

          {/* Bottom Right - Tripadvisor */}
          <div className="absolute bottom-[12%] right-[5%] md:bottom-[20%] md:right-[12%] animate-float [animation-delay:1s]">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-[#34E0A1] rounded-2xl flex items-center justify-center shadow-2xl -rotate-6 border-4 border-white/10">
              <Image
                src={assets.owl}
                alt="Tripadvisor"
                width={50}
                height={50}
                className="p-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
          Airbnb Assistants For
          <span className="block text-3xl md:text-4xl opacity-90 mt-1">
            Property Management
          </span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base mb-10 leading-relaxed max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Button className="bg-primary text-primary-foreground px-8 py-6 rounded-full font-semibold hover:bg-primary/90 transition-all active:scale-95 flex gap-2 items-center shadow-lg shadow-primary/20">
            Schedule A Meeting <ArrowRight size={20} />
          </Button>

          <button className="text-muted-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
