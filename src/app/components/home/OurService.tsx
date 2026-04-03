import Header from '@/app/components/shared/Header';
import Image from 'next/image';
import { services } from '@/assets/assets';
import Link from 'next/link';

const OurService = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <Header black="Our" primary="Services" sub="What We Offer" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-background border border-primary/20 rounded-sm hover:border hover:border-primary p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left"
          >
            <div className="mb-6 h-20 w-20 flex items-center justify-center  transition-transform duration-300 group-hover:scale-110">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="object-contain"
                priority={index < 3}
              />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
              {service.title}
            </h3>

            <p className="text-foreground/70 mb-8 leading-relaxed text-sm md:text-base">
              {service.description.length > 100
                ? service.description.slice(0, 100) + '...'
                : service.description}
            </p>

            <Link href="/services" className="block w-full h-full">
              <button className="mt-auto px-8 py-2.5 border-2 border-primary-accent text-primary rounded-full font-semibold text-sm hover:bg-primary hover:text-background  hover:border-primary transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
