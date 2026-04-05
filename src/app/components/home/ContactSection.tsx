import { Button } from '@/components/ui/button';
import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex items-center justify-center  bg-background p-4">
      <div className="w-full max-w-7xl bg-[#F9FAFB]  p-12 text-center shadow-sm flex flex-col items-center">
        <div className="flex justify-center -space-x-3 mb-6">
          <img
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            alt="Team member 1"
          />
          <img
            className="w-12 h-12 rounded-full border-2 border-white object-cover z-10"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Team member 2"
          />
          <img
            className="w-12 h-12 rounded-full border-2 border-white object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
            alt="Team member 3"
          />
        </div>

        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Still have Questions?
        </h2>
        <p className="text-slate-500 text-lg mb-8">
          Can't find the answer you're looking for? Please chat to our friendly
          team.
        </p>

        <Button className="bg-primary text-background px-5 py-5 rounded-sm font-medium hover:bg-primary/90 transition-all active:scale-95 flex gap-2 items-center">
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
