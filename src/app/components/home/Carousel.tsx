import { carouselLogo } from '@/assets/assets';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className="py-12 bg-background space-y-6">
      <h3 className="text-center text-lg font-medium  hover:underline text-foreground">
        Trusted by leaders in 50+ Industries
      </h3>
      <div className="bg-[#F6F6F6]">
        <div className="flex flex-wrap items-center justify-between gap-6 max-w-7xl mx-auto px-6 py-6 rounded-lg">
          {carouselLogo.map((img, i) => (
            <div
              key={i}
              className="relative w-28 h-10 md:w-36 md:h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={img}
                alt={`logo-${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
