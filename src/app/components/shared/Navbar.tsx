'use client';

import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <div className="sticky  top-0 z-50 bg-background shadow-[0_4px_20px_0px_#FAC4D2]">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={assets.logo}
            alt="Logo"
            width={125}
            height={45}
            priority
            className="w-25 md:w-31.25"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex list-none gap-8 font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative list-none">
              <Link
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`relative cursor-pointer py-1 block transition-all duration-300 font-medium
                  ${
                    activeTab === item.name
                      ? 'text-primary after:w-full'
                      : 'text-gray-500 hover:text-primary/70 after:w-0'
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button className="bg-primary text-background px-5 py-5 rounded-sm font-medium hover:bg-primary/90 transition-all active:scale-95 flex gap-2 items-center">
            Schedule A Meeting <ArrowRight size={18} />
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-17.5 bg-background/95 backdrop-blur-md transition-all duration-300 z-40 ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 pt-10 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setIsMenuOpen(false);
              }}
              className={`text-xl transition-colors ${
                activeTab === item.name ? 'text-primary' : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button className="mt-4 bg-primary text-background px-8 py-6 rounded-md text-lg flex gap-2 items-center">
            Schedule A Meeting <ArrowRight size={20} />
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
