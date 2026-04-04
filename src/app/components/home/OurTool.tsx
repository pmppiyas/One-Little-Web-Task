import Header from '@/app/components/shared/Header';
import { tools } from '@/assets/assets';
import Image from 'next/image';

const OurTool = () => {
  return (
    <div className="w-full mx-auto px-4 py-16 space-y-12 flex items-center flex-col justify-center">
      <div className="space-y-6">
        <Header
          black="Our"
          primary="Services"
          sub="Connect with your favorite property management tools."
        />
      </div>

      <div className="bg-[#F6F6F6] w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:px-10 lg:px-16 px-4 py-10 md:py-16 rounded-lg max-w-7xl mx-auto">
          {tools.slice(0, 9).map((tool, idx) => (
            <div
              key={idx}
              className="bg-white flex items-center justify-center p-4 py-8 rounded-xs shadow-sm h-24 md:h-28 transition-shadow duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={tool}
                  alt={`Tool ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 140px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTool;
