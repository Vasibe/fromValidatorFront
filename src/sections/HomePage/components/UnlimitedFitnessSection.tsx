"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const imgYoga = "/YogaGym.png";       
const imgRunning = "/CorrerGym.png"; 
const imgGym = "/HaciendoEjercicioGym.png";         

const UnlimitedFitnessSection = () => (
  <section
    style={{
      width: "100%",
      minHeight: "55vh",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "3.2rem 1.5rem",
      boxSizing: "border-box",
    }}
  >
    <div className="limitless-grid">
      {/* Texto columna izquierda */}
      <div className="limitless-content">
        <h2 style={{
          fontWeight: "bold",
          fontSize: "2.25rem",
          marginBottom: 12,
          color: "#141414"
        }}>
          ¿Quieres una vida fitness sin límites?
        </h2>
        <p style={{
          fontSize: 17,
          color: "#222",
          marginBottom: 18,
          opacity: 0.92,
          maxWidth: 380
        }}>
          En GymInfinity, tu potencial no tiene fin. Entrena con los mejores, siente la energía del progreso y supera tus propios límites cada día. Aquí no solo fortaleces tu cuerpo, también tu mente.
        </p>
        <p style={{
          fontSize: 16,
          color: "#222",
          opacity: 0.81,
          marginBottom: 22
        }}>
          ¡Inscríbete hoy en GymInfinity y comienza tu transformación!
        </p>
        <a
          href="/inscripcion"
          style={{
            display: "inline-block",
            background: "#F15A24",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16.5px",
            padding: "0.9rem 2rem",
            borderRadius: 8,
            textDecoration: "none",
            boxShadow: "0 4px 15px 0 rgba(241,90,36,0.20)",
            transition: "background 0.2s",
          }}
        >
          INSCRIBETE
        </a>
      </div>
      {/* Composición de imágenes lado derecho */}
      <div className="limitless-images">
        {/* Principal yoga */}
        <motion.div
          className="img-main"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          <Image
            src={imgYoga}
            alt="Yoga bienestar"
            width={260}
            height={290}
            priority
            style={{
              borderRadius: "22px",
              width: "100%",
              height: "auto",
              boxShadow: "0 4px 30px 0 rgba(44,44,44,0.10)",
              background: "#f7f7f7",
              display: "block"
            }}
          />
        </motion.div>
        {/* Running arriba derecha */}
        <motion.div
          className="img-top"
          initial={{ opacity: 0, x: 50, y: -25 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.3 }}
        >
          <Image
            src={imgRunning}
            alt="Running fitness"
            width={130}
            height={80}
            priority
            style={{
              borderRadius: "16px",
              width: "100%",
              height: "auto",
              boxShadow: "0 2px 16px 0 rgba(241,90,36,0.10)",
              background: "#f8f8f8",
              display: "block"
            }}
          />
        </motion.div>
        {/* Gym fuerza abajo izquierda */}
        <motion.div
          className="img-bottom"
          initial={{ opacity: 0, x: -45, y: 35 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.35 }}
        >
          <Image
            src={imgGym}
            alt="Fitness gym"
            width={110}
            height={60}
            priority
            style={{
              borderRadius: "15px",
              width: "100%",
              height: "auto",
              boxShadow: "0 2px 12px 0 rgba(44,44,44,0.10)",
              background: "#f6f6f6",
              display: "block"
            }}
          />
        </motion.div>
      </div>
    </div>
    <style jsx>{`
      .limitless-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
        max-width: 1060px;
        width: 100%;
        align-items: center;
      }
      .limitless-content {
        margin-bottom: 3.2rem;
      }
      .limitless-images {
        position: relative;
        min-height: 310px;
        width: 370px;
        height: 310px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .img-main {
        position: absolute;
        left: 60px;
        top: 35px;
        width: 260px;
        z-index: 2;
      }
      .img-top {
        position: absolute;
        right: 0px;
        top: -6px;
        width: 130px;
        z-index: 3;
      }
      .img-bottom {
        position: absolute;
        left: 10px;
        bottom: -6px;
        width: 110px;
        z-index: 1;
      }
      @media (min-width: 900px) {
        .limitless-grid {
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .limitless-content {
          margin-bottom: 0;
          padding-left: 0.5rem;
        }
        .limitless-images {
          margin-left: 0;
        }
      }
    `}</style>
  </section>
);

export default UnlimitedFitnessSection;
