"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const modelImage = "/ModelGym.png";

const WelcomeSection = () => (
  <div
    className="
      w-full min-h-screen flex items-center justify-center 
      bg-gradient-to-r from-[#121317] to-[#232326]
      px-6 md:px-10 py-6
    "
  >
    <div
      className="
        grid grid-cols-1 md:grid-cols-2 
        items-center gap-12 
        max-w-[1200px] w-full
      "
    >
      {/* TEXTO */}
      <div className="text-center md:text-left md:pl-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-bold text-white uppercase leading-tight 
            text-[clamp(2rem,5vw,3.5rem)] mb-6
          "
        >
          TRANSFORMA TU
          <br />
          VIDA CON{" "}
          <span className="text-[#F15A24]">GYMFINITY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            text-white opacity-90 
            text-[clamp(1rem,2vw,1.2rem)]
            mb-10 font-normal leading-relaxed
            max-w-[480px]
          "
        >
          ¡Únete hoy mismo a GymInfinity y experimenta entrenamiento experto,
          programas personalizados y una comunidad de apoyo para alcanzar tus
          objetivos de fitness!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileHover={{ scale: 1.08, backgroundColor: "#cd4311" }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="
            inline-block bg-[#F15A24] text-white 
            px-10 py-4 rounded-lg font-bold 
            text-[1.1rem] tracking-wide 
            shadow-[0_4px_12px_rgba(241,90,36,0.3)]
            transition-all duration-200
          "
        >
          INSCRÍBETE →
        </motion.a>
      </div>

      {/* IMAGEN */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          transition={{ type: "spring", stiffness: 210, damping: 14 }}
          className="rounded-lg overflow-hidden"
        >
          <Image
            src={modelImage}
            alt="Modelos Gymfinity"
            width={440}
            height={525}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default WelcomeSection;
