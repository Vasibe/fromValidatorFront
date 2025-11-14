"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const modelImage = "/ModelGym.png";

const WelcomeSection = () => (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(90deg, #121317 55%, #232326 100%)",
      padding: "1rem 2.5rem",
      boxSizing: "border-box",
    }}
  >
    <div className="welcome-grid">
      {/* TEXTO A LA IZQUIERDA */}
      <div className="welcome-text">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "bold",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            marginBottom: "1.5rem",
            lineHeight: 1.1,    
            textTransform: "uppercase",
          }}
        >
          TRANSFORMA TU<br />VIDA CON{" "}
          <span style={{ color: "#F15A24" }}>GYMFINITY</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            color: "#fff",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            marginBottom: "2.5rem",
            fontWeight: 400,
            opacity: 0.93,
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          ¡Únete hoy mismo a GymInfinity y experimenta entrenamiento experto, programas personalizados y una comunidad de apoyo para alcanzar tus objetivos de fitness!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileHover={{ scale: 1.08, backgroundColor: "#cd4311" }}
          whileTap={{ scale: 0.95 }}
          href="/"
          style={{
            display: "inline-block",
            background: "#F15A24",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            letterSpacing: "0.05em",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "0 4px 12px 0 rgba(241,90,36,0.3)"
          }}
        >
          INSCRIBETE &rarr;
        </motion.a>
      </div>
      {/* IMAGEN A LA DERECHA */}
      <motion.div 
        className="welcome-image"
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
          transition={{ type: "spring", stiffness: 210, damping: 14 }}
          style={{
            
            borderRadius: "10px",
            overflow: "hidden"
          }}
        >
          <Image
            src={modelImage}
            alt="Modelos Gymfinity"
            width={440}
            height={525}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
            priority
          />
        </motion.div>
      </motion.div>
    </div>

    <style jsx>{`
      .welcome-grid {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        gap: 3rem;
        max-width: 1200px;
        width: 100%;
      }
      .welcome-text {
        text-align: center;
        padding-left: 0;
      }
      @media (min-width: 900px) {
        .welcome-grid {
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .welcome-text {
          text-align: left;
          padding-left: 3.5rem; /* Separa el texto del borde izquierdo en desktop */
        }
      }
    `}</style>
  </div>
);

export default WelcomeSection;
