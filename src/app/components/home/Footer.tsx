import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { assets } from '@/assets/assets';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="space-y-4">
    <h4 className="text-foreground font-bold text-base">{title}</h4>
    <ul className="space-y-3 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const socialLinks: SocialLink[] = [
    {
      href: 'https://twitter.com',
      icon: <FaTwitter size={18} />,
      label: 'Twitter',
    },
    {
      href: 'https://facebook.com',
      icon: <FaFacebook size={18} />,
      label: 'Facebook',
    },
    {
      href: 'https://instagram.com',
      icon: <FaInstagram size={18} />,
      label: 'Instagram',
    },
    {
      href: 'https://github.com',
      icon: <FaGithub size={18} />,
      label: 'Github',
    },
  ];

  return (
    <div>
      <footer className="bg-background py-16 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-1">
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
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>

            <div className="flex items-center gap-5 text-muted-foreground">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-foreground transition-colors transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterColumn
              title="Company"
              links={[
                { label: 'About', href: '/about' },
                { label: 'Features', href: '/features' },
                { label: 'Works', href: '/works' },
                { label: 'Career', href: '/career' },
              ]}
            />

            <FooterColumn
              title="Help"
              links={[
                { label: 'Customer Support', href: '/support' },
                { label: 'Delivery Details', href: '/delivery' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'Privacy Policy', href: '/privacy' },
              ]}
            />

            <FooterColumn
              title="Resources"
              links={[
                { label: 'Free eBooks', href: '/ebooks' },
                { label: 'Development Tutorial', href: '/tutorials' },
                { label: 'How to - Blog', href: '/blog' },
                { label: 'Youtube Playlist', href: '/youtube' },
              ]}
            />
          </div>
        </div>
      </footer>
      <div className="bg-[#230B41] ">
        <h4 className="text-white text-xs text-center py-3">
          © Copyright 2024, All Rights Reserved by XYz
        </h4>
      </div>
    </div>
  );
};

export default Footer;
