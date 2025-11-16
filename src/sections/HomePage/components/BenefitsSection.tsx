"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BenefictsImage = "/BenefictsGym.png";

const features = [
  {
    title: "Entrenadoras expertas(femenino)\nEntrenadores expertos",
    description:
      "Nuestros entrenadores certificados brindan orientación personalizada y asesoramiento experto para ayudarle a alcanzar sus objetivos de fitness.",
  },
  {
    title: "Equipos de última generación",
    description:
      "Entrena con los equipos de fitness más modernos y avanzados para maximizar tus resultados y mejorar tu experiencia.",
  },
  {
    title: "Programas integrales",
    description:
      "Disfrute de una variedad de clases y programas adaptados a todos los niveles de condición física, desde principiante hasta avanzado.",
  },
];

const AnimatedCheckIcon = () => (
  <motion.span
    initial={{ scale: 1, backgroundColor: "#F15A24" }}
    whileHover={{
      scale: 1.15,
      backgroundColor: "#ff6b35",
      rotate: [0, -5, 5, 0],
    }}
    whileTap={{ scale: 0.9 }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 17,
      rotate: { duration: 0.3 },
    }}
    className="inline-flex items-center justify-center w-[40px] h-[19px] rounded-full mr-3 cursor-pointer"
  >
    <motion.svg
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <path
        d="M11.291 1.657L4.812 8.136 2.003 5.327"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  </motion.span>
);

const BenefictsSection = () => (
  <section className="w-full bg-white flex items-center justify-center min-h-[60vh] p-10">
    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 max-w-[1050px] w-full items-center">
      
      {/* Imagen */}
      <div className="justify-self-center min-w-[220px] max-w-[320px] w-full">
        <motion.div
          initial={{
            scale: 1,
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            filter: "brightness(1)",
          }}
          whileHover={{
            scale: 1.055,
            filter: "brightness(1.08)",
            boxShadow: "0 8px 36px rgba(241,90,36,0.12)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 180, damping: 17 }}
          className="rounded-[18px]"
        >
          <Image
            src={BenefictsImage}
            alt="Entrenadora fitness con alumnos"
            width={320}
            height={380}
            className="w-full h-auto rounded-[18px] object-cover max-w-[320px] transition-shadow duration-200"
            priority
          />
        </motion.div>
      </div>

      {/* Texto */}
      <div className="px-2 lg:pr-8">
        <h2 className="text-[2.2rem] font-bold mb-4 text-gray-900">
          ¿Por qué elegir FitLife Studio?
        </h2>

        <p className="text-gray-800 text-[16px] opacity-90 mb-7">
          Descubra los beneficios que nos distinguen e impulse su viaje de fitness.
        </p>

        <ul className="list-none m-0 p-0">
          {features.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start mb-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <AnimatedCheckIcon />

              <div>
                <div className="font-semibold text-[1.08rem] mb-1 text-gray-900">
                  {item.title.split("\n").map((t, idx) => (
                    <span key={idx} className="block">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="text-[15px] text-gray-700 opacity-90 mr-4">
                  {item.description}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default BenefictsSection;
