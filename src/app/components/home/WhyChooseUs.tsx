import { FileCheck } from 'lucide-react';
import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    'Brilliant Client Service',
    'Flexibility & Adaptibility',
    'We make it Personal',
    'We have expert in our team',
  ];

  return (
    <div className="bg-[#fce8f0] rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 space-y-5 z-10">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Few Reasons Why you <br /> Choose us?
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
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

      {/* Center: Floating booking card + person image */}
      <div className="relative flex-1 flex justify-center items-end min-h-80">
        {/* Booking card */}
        <div className="absolute bottom-0 left-0 z-10 bg-white rounded-2xl shadow-md p-4 w-52">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-16 h-12 bg-gray-200 rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=120&h=80&fit=crop"
                alt="room"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex text-yellow-400 text-xs">★★★★☆</div>
              <p className="text-sm font-bold text-gray-800">
                $75
                <span className="text-xs font-normal text-gray-500">
                  /night
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Calendar card */}
        <div className="absolute bottom-0 right-0 z-10 bg-white rounded-2xl shadow-md p-3 w-44">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-700">
              March 2024
            </span>
            <div className="flex gap-1">
              <button className="text-xs bg-gray-100 rounded px-1">‹</button>
              <button className="text-xs bg-gray-100 rounded px-1">›</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] text-gray-400 mb-1">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[10px]">
            {[
              '',
              '',
              '',
              '',
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              '',
            ].map((day, i) => (
              <span
                key={i}
                className={`py-0.5 rounded-full ${
                  [8, 9, 10, 11].includes(Number(day))
                    ? 'bg-[#e91e8c] text-white font-semibold'
                    : day === 12
                      ? 'text-[#e91e8c] font-semibold'
                      : 'text-gray-700'
                }`}
              >
                {day || ''}
              </span>
            ))}
          </div>
        </div>

        {/* Person placeholder (decorative circle as stand-in) */}
        <div className="relative z-0 w-56 h-64 rounded-full bg-[#f4a8c8] overflow-hidden flex items-end justify-center">
          <div className="text-6xl select-none">🧑‍💼</div>
        </div>
      </div>

      {/* Right: OTA Logos */}
      <div className="flex flex-col gap-3 z-10">
        {[
          { label: 'Airbnb', color: 'bg-red-50', text: 'text-red-500' },
          { label: 'VRBO', color: 'bg-blue-50', text: 'text-blue-700' },
          {
            label: 'Booking.com',
            color: 'bg-blue-100',
            text: 'text-blue-900',
          },
          {
            label: 'Tripadvisor',
            color: 'bg-green-50',
            text: 'text-green-700',
          },
        ].map((ota) => (
          <div
            key={ota.label}
            className={`w-14 h-14 rounded-2xl ${ota.color} flex items-center justify-center`}
          >
            <span
              className={`text-[10px] font-bold text-center ${ota.text} leading-tight px-1`}
            >
              {ota.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
