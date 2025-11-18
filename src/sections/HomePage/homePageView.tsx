"use client";

import NavBar from "@/src/components/mainNavBar";
import WelcomeSection from "./components/WelcomeSection";
import BenefictsSection from "./components/BenefitsSection";
import ServicePremiumSection from "./components/ServicePremiumSection";
import UnlimitedFitnessSection from "./components/UnlimitedFitnessSection";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function HomePageView() {
  const links = [
    { nombre: "Home", href: "/", active: true },
    { nombre: "Servicios", href: "/" },
    { nombre: "Contacto", href: "/" },
  ];
  const profileButton = { nombre: "Mi perfil", href: "/" };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar links={links} profileButton={profileButton} />
      <WelcomeSection />
      <BenefictsSection />
      <ServicePremiumSection />
      <UnlimitedFitnessSection />
      <HeroSection />
      <FooterSection
        brandName="GymInfinity"
        year={2025}
        mainLinks={[
          { label: "About", href: "/about" },
          { label: "Services", href: "/UserRegister"},
          { label: "Contact", href: "/contact" },
        ]}
        legalLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookies Settings", href: "/cookies" },
        ]}
        socialLinks={[
          { label: "Facebook", href: "/", icon: <Facebook size={18} /> },
          { label: "Instagram", href: "/", icon: <Instagram size={18} /> },
          { label: "X", href: "#", icon: <Twitter size={18} /> },
          { label: "LinkedIn", href: "/", icon: <Linkedin size={18} /> },
          { label: "YouTube", href: "/", icon: <Youtube size={18} /> },
        ]}
      />
    </div>
  );
}
