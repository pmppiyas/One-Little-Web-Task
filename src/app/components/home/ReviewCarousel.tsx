'use client';

import Header from '@/app/components/shared/Header';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { reviews } from '@/assets/assets';
import Image from 'next/image';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 mt-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-3 h-3 ${star <= rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-12 overflow-hidden">
      <Header
        black="Check Our Clients"
        primary="Review"
        sub="  See how property owners are transforming their business and maximizing
          their earnings with our automated management tools. Your success is
          our priority."
      />

      {/* Carousel Container */}
      <div className="relative px-4">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-8">
            {reviews.map((review, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8 md:flex-[0_0_40%] lg:flex-[0_0_33.33%] py-10 transition-all duration-500 hover:cursor-pointer select-none"
                >
                  <div
                    className={`relative transition-all duration-500 rounded-sm p-8 flex items-center gap-6
                    ${
                      isActive
                        ? 'bg-background shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-110 z-20 border-none'
                        : 'bg-[#F9F9F9] scale-90 opacity-50 z-10'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 absolute inset-0 -z-10 translate-x-1" />
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-background">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-left space-y-1">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">
                        {review.name}
                      </h4>
                      <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {review.text}
                      </p>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
