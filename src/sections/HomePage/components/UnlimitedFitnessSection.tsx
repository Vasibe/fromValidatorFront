"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imgYoga = "/YogaGym.png";
const imgRunning = "/CorrerGym.png";
const imgGym = "/HaciendoEjercicioGym.png";

const UnlimitedFitnessSection = () => (
  <section
    className="
      w-full min-h-[55vh] bg-white 
      flex items-center justify-center 
      px-6 py-14
    "
  >
    <div
      className="
        grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr] 
        gap-10 md:gap-8 
        max-w-[1200px] w-full items-center
      "
    >
      {/* Texto */}
      <div className="mb-12 md:mb-0 md:pl-20">
        <h2 className="text-[2.25rem] font-bold text-[#141414] mb-3">
          ¿Quieres una vida fitness sin límites?
        </h2>

        <p className="text-[17px] text-[#222] opacity-95 mb-4 max-w-[480px] leading-relaxed">
          En GymInfinity, tu potencial no tiene fin. Entrena con los mejores,
          siente la energía del progreso y supera tus propios límites cada día.
          Aquí no solo fortaleces tu cuerpo, también tu mente.
        </p>

        <p className="text-[16px] text-[#222] opacity-80 mb-6">
          ¡Inscríbete hoy en GymInfinity y comienza tu transformación!
        </p>

        <a
          href="/"
          className="
            inline-block bg-[#F15A24] text-white 
            font-bold text-[16.5px] 
            px-8 py-3.5 rounded-lg 
            shadow-[0_4px_15px_rgba(241,90,36,0.20)]
            hover:bg-[#d44f1f] transition
          "
        >
          INSCRÍBETE
        </a>
      </div>

      {/* IMÁGENES */}
      <div
        className="
          relative flex items-center justify-center 
          md:gap-10 gap-6
          flex-col md:flex-row
        "
      >
        {/* ↓ Imagen pequeña (GIM) — posición absoluta izquierda abajo */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 18,
            delay: 0.25,
          }}
          className="
            hidden md:block absolute 
            bottom-[30px] left-[49px] z-[3] 
           w-[180px]
          "
        >
          <Image
            src={imgGym}
            alt="Fitness gym"
            width={220}
            height={140}
            className="
              rounded-[10px] shadow-[0_18px_45px_rgba(0,0,0,0.12)]
              bg-[#f6f6f6] w-full h-auto
            "
            priority
          />
        </motion.div>

        {/* Imagen principal — YOGA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="
         w-[260px] sm:w-[290px] md:w-[340px]
            z-[1]
          "
        >
          <Image
            src={imgYoga}
            alt="Yoga bienestar"
            width={420}
            height={320}
            className="
              rounded-[16px] bg-[#f7f7f7]
              shadow-[0_24px_60px_rgba(0,0,0,0.12)]
              w-full h-auto
            "
            priority
          />
        </motion.div>

        {/* ↑ Imagen pequeña (RUNNING) — posición absoluta derecha arriba */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 18,
            delay: 0.15,
          }}
          className="
            hidden md:block absolute 
            top-[30px] right-[50px] z-[3] 
                w-[180px]
          "
        >
          <Image
            src={imgRunning}
            alt="Running fitness"
            width={220}
            height={140}
            className="
              rounded-[10px] bg-[#f8f8f8]
              shadow-[0_18px_45px_rgba(241,90,36,0.18)]
              w-full h-auto
            "
            priority
          />
        </motion.div>

        {/* Versiones móviles — imágenes pequeñas debajo/arriba */}
        <div className="flex md:hidden flex-col gap-3 items-center">
          <Image
            src={imgRunning}
            alt="Running fitness"
            width={190}
            height={130}
            className="
              rounded-[10px] bg-[#f8f8f8] shadow-md
                   w-[160px]
            "
          />

          <Image
            src={imgGym}
            alt="Fitness gym"
            width={190}
            height={130}
            className="
              rounded-[10px] bg-[#f6f6f6] shadow-md
               w-[160px]
            "
          />
        </div>
      </div>
    </div>
  </section>
);

export default UnlimitedFitnessSection;
