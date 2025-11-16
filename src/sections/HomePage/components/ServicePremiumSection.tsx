"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Entrenamiento personal",
    description:
      "Obtén entrenamientos personalizados y entrenamiento individualizado de nuestros entrenadores expertos para alcanzar tus objetivos específicos de fitness.",
    image: "/servicesPersonalGym.png",
    featured: false,
  },
  {
    id: 2,
    title: "Clases grupales de fitness",
    description:
      "Únete a nuestras clases grupales dinámicas y motivadoras, que abarcan desde yoga hasta entrenamiento de intervalos de alta intensidad, diseñadas para todos los niveles de condición.",
    image: "/servicesGroupGym.png",
    featured: false,
  },
  {
    id: 3,
    title: "Orientación nutricional",
    description:
      "Planes nutricionales y consejos de nuestros nutricionistas certificados para complementar tu rutina de ejercicios y mejorar tus resultados.",
    image: "/servicesNutritionGym.png",
    featured: false,
  },
  {
    id: 4,
    title: "Programas de bienestar",
    description:
      "Programas de bienestar que incluyen manejo del estrés, bienestar mental y técnicas de recuperación para apoyar su salud general.",
    image: "/servicesWellnessGym.png",
    featured: false,
  },
  {
    id: 5,
    title: "Entrenamientos de cardio",
    description:
      "Mejora tu resistencia y salud cardiovascular con nuestra variedad de clases y equipos de cardio.",
    image: "/servicesCardioGym.png",
    featured: false,
  },
  {
    id: 6,
    title: "Entrenamiento de fuerza",
    description:
      "Desarrolla músculo y aumenta tu fuerza con nuestros programas y equipos de levantamiento de pesas de última generación.",
    image: "/servicesStrengthGym.png",
    featured: false,
  },
];

const cardVariants = {
  initial: {
    y: 0,
    scale: 1,
    borderColor: "rgba(0,0,0,0.04)",
    boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 14px 40px rgba(241, 90, 36, 0.15)",
    borderColor: "#F15A24",
  },
};

const ServicePremiumSection = () => (
  <section className="w-full bg-[#f5f5f7] flex items-center justify-center py-14 px-6">
    <div className="w-full max-w-[1120px]">
      
      {/* Título */}
      <header className="text-center mb-12">
        <h2 className="text-[2.4rem] font-bold text-[#111] mb-3">
          Servicios de fitness premium
        </h2>
        <p className="text-[16px] text-[#444] opacity-90 max-w-[640px] mx-auto">
          Entrenamientos personalizados, asesoramiento experto y programas integrales
          para satisfacer todas tus necesidades de fitness.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.article
            key={service.id}
            className="relative bg-white rounded-[20px] p-4 pt-5 border-2 overflow-hidden cursor-default"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
            }}
            style={{
              borderColor: service.featured
                ? "#F15A24"
                : "rgba(0,0,0,0.04)",
            }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(241,90,36,0.03)_0%,rgba(255,255,255,0)_50%)] pointer-events-none z-[1]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Imagen */}
            <div className="rounded-[16px] overflow-hidden mb-4 relative z-[2]">
              <Image
                src={service.image}
                alt={service.title}
                width={340}
                height={210}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Titulo */}
            <h3 className="text-[1.12rem] font-bold text-[#141414] mb-2 relative z-[2]">
              {service.title}
            </h3>

            {/* Descripción */}
            <p className="text-[14.5px] text-[#555] leading-[1.6] relative z-[2]">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePremiumSection;
