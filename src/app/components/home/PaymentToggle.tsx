'use client';

import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const PaymentToggle = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="relative flex items-center gap-4  justify-center">
      <span
        onClick={() => setYearly(false)}
        className={`cursor-pointer transition ${
          !yearly ? 'text-foreground font-semibold' : 'text-gray-400'
        }`}
      >
        Pay Monthly
      </span>

      <Switch checked={yearly} onCheckedChange={setYearly} />

      <span
        onClick={() => setYearly(true)}
        className={`cursor-pointer transition ${
          yearly ? 'text-gray-900 font-semibold' : 'text-gray-400'
        }`}
      >
        Pay Yearly
      </span>

      {/* Arrow + Badge */}
      <div className="absolute -right-4 -top-8 -rotate-40 md:-rotate-4 md:top-auto md:-right-14 md:-bottom-3 flex items-center gap-1 md:gap-2">
        <div className="relative w-8 h-8 md:w-12.5 md:h-12.5">
          <Image
            src={assets.arrow}
            alt="Arrow"
            fill
            className="object-contain"
          />
        </div>

        <span className="text-primary font-bold text-xs md:text-lg whitespace-nowrap pt-2 md:pt-4">
          Save 25%
        </span>
      </div>
    </div>
  );
};

export default PaymentToggle;
