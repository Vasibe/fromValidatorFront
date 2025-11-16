"use client";

import NavBar from "@/src/components/mainNavBar";
import WelcomeSection from "./components/WelcomeSection";
import BenefictsSection from "./components/BenefitsSection";
import ServicePremiumSection from "./components/ServicePremiumSection";
import UnlimitedFitnessSection from "./components/UnlimitedFitnessSection";
import HeroSection from "./components/HeroSection";


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
    </div>
  );
}
