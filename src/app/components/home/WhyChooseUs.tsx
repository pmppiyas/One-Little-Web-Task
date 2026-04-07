import CalenderCard from '@/app/components/home/CalenderCard';
import { assets, reasons } from '@/assets/assets';
import { FileCheck } from 'lucide-react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="bg-[#fce8f0] rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-5 z-10">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Few Reasons Why you <br /> Choose us?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>

          <ul className="space-y-2">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-3 text-sm text-gray-700 font-medium"
              >
                <span className="w-5 h-5 rounded-full bg-[#e91e8c] flex items-center justify-center shrink-0">
                  <FileCheck className="text-white w-3 h-3" strokeWidth={3} />
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <button className="mt-4 inline-flex items-center gap-2 bg-[#e91e8c] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#c91676] transition-colors">
            Schedule A Meeting <span>→</span>
          </button>
        </div>

        <div className="relative flex-1 flex justify-center items-end min-h-80 w-full ">
          {/* Booking card */}
          <div className="absolute top-0 left-0 z-10 bg-background rounded-lg shadow-lg p-2  flex items-center gap-3 border border-gray-100">
            <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop"
                alt="room"
                fill
                className="object-cover"
              />
            </div>

            <div className=" flex flex-col justify-between overflow-hidden">
              <p className="text-[11px] font-medium text-gray-700 leading-tight truncate">
                Luxury Modern Room
              </p>

              <div className="flex text-yellow-400 text-[10px] my-1">★★★★☆</div>

              <div className="flex items-baseline gap-1">
                <p className="text-sm font-bold text-gray-900">$75</p>
                <span className="text-[10px] text-gray-500 font-normal">
                  /night
                </span>
              </div>
            </div>
          </div>
          {/* Calendar card */}
          <div className="absolute bottom-0 left-0 z-10 ">
            <CalenderCard />
          </div>

          <div className="relative w-72 h-87 flex items-end justify-center">
            <div className="absolute bottom-0 w-72 h-72 rounded-full bg-primary/30 z-0 overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75 h-100">
                <Image
                  src={assets.man}
                  fill
                  alt="man-bottom"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="relative z-10 w-75 h-100 pointer-events-none">
              <Image
                src={assets.man}
                fill
                alt="man-top"
                className="object-contain"
                style={{ clipPath: 'inset(0 0 30% 0)' }}
              />
            </div>
          </div>

          {/* Right: OTA Logos */}
          <div className="absolute top-20 ld:top-0 -right-14 md:right-0 z-10 grid grid-cols-2 gap-3 bg-background backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-gray-100">
            {[
              {
                label: 'Airbnb',
                bg: 'bg-[#FF5A5F]',
                icon: assets.air,
                size: 35,
              },
              {
                label: 'Booking',
                bg: 'bg-[#003580]',
                icon: assets.b,
                size: 35,
              },
              { label: 'VRBO', bg: 'bg-[#1A1F2B]', icon: assets.v, size: 30 },
              {
                label: 'Tripadvisor',
                bg: 'bg-[#34E0A1]',
                icon: assets.owl,
                size: 35,
              },
            ].map((ota) => (
              <div
                key={ota.label}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${ota.bg} flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer`}
              >
                <Image
                  src={ota.icon}
                  alt={ota.label}
                  width={ota.size}
                  height={ota.size}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
