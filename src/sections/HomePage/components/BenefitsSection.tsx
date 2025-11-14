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

const CheckIcon = ({ isHovered = false }) => (
  <motion.span
    initial={{ scale: 1, backgroundColor: "#F15A24" }}
    whileHover={{ 
      scale: 1.1, 
      backgroundColor: "#e04a1a",
      boxShadow: "0 4px 12px rgba(241, 90, 36, 0.4)"
    }}
    animate={isHovered ? { 
      scale: 1.05,
      backgroundColor: "#e04a1a"
    } : { 
      scale: 1,
      backgroundColor: "#F15A24"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 19,
      height: 19,
      borderRadius: "50%",
      marginRight: 14,
      flexShrink: 0,
    }}
  >
    <motion.svg 
      width="13" 
      height="11" 
      viewBox="0 0 13 11" 
      fill="none"
      initial={{ pathLength: 0 }}
      whileHover={{ pathLength: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.path
        d="M11.291 1.657L4.812 8.136 2.003 5.327"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileHover={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.svg>
  </motion.span>
);

const AnimatedCheckIcon = () => (
  <motion.span
    initial={{ scale: 1, backgroundColor: "#F15A24" }}
    whileHover={{ 
      scale: 1.15,
      backgroundColor: "#ff6b35",
      rotate: [0, -5, 5, 0]
    }}
    whileTap={{ scale: 0.9 }}
    transition={{ 
      type: "spring", 
      stiffness: 400, 
      damping: 17,
      rotate: { duration: 0.3 }
    }}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 19,
      borderRadius: "50%",
      marginRight: 14,
      flexShrink: 0,
      cursor: "pointer",
    }}
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
  <section
    style={{
      width: "100%",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      padding: "2.5rem",
      boxSizing: "border-box",
    }}
  >
    <div className="choose-grid">
      {/* Imagen con animación */}
      <div className="choose-img">
        <motion.div
          initial={{ scale: 1, boxShadow: "0 2px 12px 0 rgba(0,0,0,0.12)", filter: "brightness(1)" }}
          whileHover={{
            scale: 1.055,
            filter: "brightness(1.08)",
            boxShadow: "0 8px 36px 0 rgba(241,90,36,0.12)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 180, damping: 17 }}
          style={{ borderRadius: "18px" }}
        >
          <Image
            src={BenefictsImage}
            alt="Entrenadora fitness con alumnos"
            width={320}
            height={380}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "18px",
              objectFit: "cover",
              maxWidth: "320px",
              transition: "box-shadow 0.25s",
            }}
            priority
          />
        </motion.div>
      </div>
      
      {/* Texto */}
      <div className="choose-content">
        <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: 16 }}>
          ¿Por qué elegir FitLife Studio?
        </h2>
        <p
          style={{
            color: "#222",
            fontSize: 16,
            marginBottom: 30,
            opacity: 0.87,
          }}
        >
          Descubra los beneficios que nos distinguen e impulse su viaje de fitness.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {features.map((item, i) => (
            <motion.li 
              key={i} 
              style={{ display: "flex", alignItems: "flex-start", marginBottom: 28 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <AnimatedCheckIcon />
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.08rem", marginBottom: 3, color: "#222" }}>
                  {item.title.split("\n").map((t, idx) => (
                    <span key={idx} style={{ display: "block" }}>{t}</span>
                  ))}
                </div>
                <div style={{ fontSize: 15, color: "#444", opacity: 0.88, marginRight: 18 }}>
                  {item.description}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
      .choose-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.4rem;
        max-width: 1050px;
        width: 100%;
        align-items: center;
      }
      .choose-img {
        justify-self: center;
        min-width: 220px; 
        max-width: 320px;
        width: 100%;
      }
      .choose-content {
        padding: 0 0.7rem;
      }
      @media (min-width: 900px) {
        .choose-grid {
          grid-template-columns: 420px 1fr; 
          gap: 1rem; 
        }
        .choose-img {
          max-width: 320px; 
        }
        .choose-content {
          padding-right: 2.2rem;
        }
      }
    `}</style>
  </section>
);

export default BenefictsSection;