'use client';

import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const CurvedArrow = () => (
  <svg
    width="60"
    height="35"
    viewBox="0 0 60 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rotate-[-10deg]"
  >
    <path
      d="M55 30C45 30 35 25 30 15C25 5 35 2 40 8C45 15 35 20 20 22L5 25"
      stroke="#F43F5E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 20L5 25L10 30"
      stroke="#F43F5E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
      <div className="absolute -right-18 -bottom-3 flex items-center gap-2 ">
        <Image src={assets.arrow} alt="Arrow" height={50} width={50} />

        <span className="text-primary font-medium text-sm whitespace-nowrap pt-4 ">
          Save 25%
        </span>
      </div>
    </div>
  );
};

export default PaymentToggle;
