import Header from '@/app/components/shared/Header';
import { steps } from '@/assets/steps';
import Image from 'next/image';

const GettingStart = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <Header black="Getting Started is" primary="Easy" sub="What We Offer" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:px-8 lg:px-16">
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className="group flex flex-col items-center text-center cursor-default"
          >
            <div className="relative border border-gray-200 rounded-3xl p-8 py-12 flex items-center justify-center w-full transition-all duration-300 hover:shadow-sm hover:border-primary/20 bg-background">
              <div className="absolute -top-6 -left-3 w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-background transition-transform duration-300 group-hover:scale-110 shadow-sm">
                <span className="text-xl font-bold text-foreground">
                  {step.number}
                </span>
              </div>

              <div className="w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={step.icon}
                  alt={`step-${idx + 1}`}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Label */}
            <p className="mt-6 text-lg font-semibold text-foreground leading-snug max-w-50">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStart;
