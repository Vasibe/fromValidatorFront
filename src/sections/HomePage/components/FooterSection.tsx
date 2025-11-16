"use client";

import React from "react";
import Image from "next/image";


import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type FooterProps = {
  brandName?: string;
  year?: number | string;
  mainLinks?: NavLink[];
  legalLinks?: NavLink[];
  socialLinks?: SocialLink[];
};

const FooterSection: React.FC<FooterProps> = ({
  brandName = "GymInfinity",
  year = new Date().getFullYear(),
  mainLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
  ],
  socialLinks = [
    { label: "Facebook", href: "/", icon: <Facebook size={18} /> },
    { label: "Instagram", href: "/", icon: <Instagram size={18} /> },
    { label: "X", href: "/", icon: <Twitter size={18} /> },
    { label: "LinkedIn", href: "/", icon: <Linkedin size={18} /> },
    { label: "YouTube", href: "/", icon: <Youtube size={18} /> },
  ],
}) => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6">
          
          {/* Logo*/}
          <div className="flex items-center gap-2">
            <Image
              src="/logoGym.png"
              width={32}
              height={32}
              alt="Logo"
              className="rounded-full"
            />
            <span className="text-sm font-semibold text-gray-900">
              {brandName}
            </span>
          </div>

          {/* Links principales */}
          <nav className="flex items-center gap-6 text-sm text-gray-700">
            {mainLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#F15A24] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Redes sociales con iconos */}
          <div className="flex items-center gap-4 text-[#F15A24]">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="hover:opacity-80 transition-opacity"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <p className="text-xs text-gray-500">
            © {year} {brandName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            {legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#F15A24] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
