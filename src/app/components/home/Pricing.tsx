import PaymentToggle from '@/app/components/home/PaymentToggle';
import Header from '@/app/components/shared/Header';
import { plans } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12 flex items-center flex-col justify-center">
      <div className=" space-y-6">
        <Header
          black="AirBnb Assistant"
          primary="Pricing"
          sub="Choose a plan that’s right for you"
        />

        <PaymentToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xs border p-8 flex flex-col justify-between transition-all duration-300
          ${
            plan.highlighted
              ? 'bg-primary text-primary-foreground shadow-2xl scale-105 z-10 border-primary'
              : 'bg-card text-card-foreground shadow-sm hover:shadow-md border-border'
          }`}
          >
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p
                className={`text-sm mt-3 leading-relaxed ${
                  plan.highlighted ? 'opacity-90' : 'text-muted-foreground'
                }`}
              >
                Ideal for individuals who need professional access.
              </p>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span
                  className={`text-sm font-medium ${
                    plan.highlighted ? 'opacity-80' : 'text-muted-foreground'
                  }`}
                >
                  / Month
                </span>
              </div>

              <Button
                variant={plan.highlighted ? 'secondary' : 'outline'}
                className={`w-full mt-8 h-12 rounded-xs font-bold text-base transition-transform active:scale-95 ${
                  plan.highlighted
                    ? 'bg-background text-primary hover:bg-slate-100 border-none'
                    : 'border-primary text-primary hover:bg-primary/5'
                }`}
              >
                Get Started Now
              </Button>
            </div>

            {/* Features List */}
            <ul className="mt-10 space-y-5">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm font-medium"
                >
                  <div
                    className={`mt-0.5 w-5 h-5 flex items-center justify-center rounded-full shrink-0
                  ${
                    feature.included
                      ? plan.highlighted
                        ? 'bg-white/20 text-primary'
                        : 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground opacity-50'
                  }`}
                  >
                    {feature.included ? (
                      <Check size={14} strokeWidth={3} />
                    ) : (
                      <X size={14} strokeWidth={3} />
                    )}
                  </div>

                  <span
                    className={`${
                      feature.included
                        ? 'opacity-100'
                        : 'opacity-50 line-through text-foreground'
                    }`}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
