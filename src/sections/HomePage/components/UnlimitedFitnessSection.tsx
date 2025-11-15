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
      {/* Columna izquierda: texto */}
      <div className="limitless-content">
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2.25rem",
            marginBottom: 12,
            color: "#141414",
          }}
        >
          ¿Quieres una vida fitness sin límites?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "#222",
            marginBottom: 18,
            opacity: 0.92,
            maxWidth: 480,
          }}
        >
          En GymInfinity, tu potencial no tiene fin. Entrena con los mejores,
          siente la energía del progreso y supera tus propios límites cada día.
          Aquí no solo fortaleces tu cuerpo, también tu mente.
        </p>
        <p
          style={{
            fontSize: 16,
            color: "#222",
            opacity: 0.81,
            marginBottom: 22,
          }}
        >
          ¡Inscríbete hoy en GymInfinity y comienza tu transformación!
        </p>
        <a
          href="/"
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

      {/* Columna derecha: fila de imágenes */}
      <div className="limitless-images-row" >
        <div className="right-small-images">
          {/* Abajo: Gym */}
          <motion.div
            className="img-small"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.25 }}
          >
            <Image
              src={imgGym}
              alt="Fitness gym"
              width={220}
              height={140}
              priority
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "auto",
                boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
                background: "#f6f6f6",
                display: "block",
              }}
            />
          </motion.div>
        </div>
           
      
        {/* Yoga: principal, más grande */}
        <motion.div
          className="img-yoga"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          <Image
            src={imgYoga}
            alt="Yoga bienestar"
            width={420}
            height={320}
            priority
            style={{
              borderRadius: "16px",
              width: "100%",
              height: "auto",
              boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
              background: "#f7f7f7",
              display: "block",
            }}
          />
        </motion.div>
        <div className="right-small-images">
          {/* Arriba: Running */}
          <motion.div
            className="img-small"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.15 }}
          >
            <Image
              src={imgRunning}
              alt="Running fitness"
              width={220}
              height={140}
              priority
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "auto",
                boxShadow: "0 18px 45px rgba(241,90,36,0.18)",
                background: "#f8f8f8",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>

    <style jsx>{`
  .limitless-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 1200px;
    width: 100%;
    align-items: center;
  }

  .limitless-content {
    margin-bottom: 3.2rem;
  }

  /* Contenedor fila: yoga grande + las dos pequeñas encima */
  .limitless-images-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    position: relative; /* referencia para los absolutos */
  }

  .img-yoga {
    flex-shrink: 0;
    width: 420px;
  }

  /* estilo base de las pequeñas */
  .img-small {
    width: 220px;
  }

  /* PRIMER right-small-images: gym (abajo izquierda) */
  .limitless-images-row > .right-small-images:first-of-type {
    position: absolute;
    bottom: 30px;   
    left: 148px;  
      z-index: 3; 
  }

  /* SEGUNDO right-small-images: running (arriba derecha) */
  .limitless-images-row > .right-small-images:last-of-type {
    position: absolute;
    top: 30px;   
    right: 150px; 
    z-index: 3;
  }

  @media (min-width: 900px) {
    .limitless-grid {
      grid-template-columns: 1.1fr 1.2fr;
      gap: 2rem;
    }

    .limitless-content {
      margin-bottom: 0;
      padding-left: 5.5rem;
    }
  }

  @media (max-width: 900px) {
    .limitless-images-row {
      flex-direction: column;
      gap: 1.5rem;
    }

    .img-yoga {
      width: 320px;
       z-index: 1;
    }

    .img-small {
      width: 150px;
    }

    .limitless-images-row > .right-small-images:first-of-type {
      bottom: -16px;
      left: -24px;
    }

    .limitless-images-row > .right-small-images:last-of-type {
      top: -16px;
      right: -24px;
    }
  }

  @media (max-width: 640px) {
    .img-yoga {
      width: 280px;
    }

    .img-small {
      width: 190px;
    }

    .limitless-images-row > .right-small-images:first-of-type {
      bottom: -14px;
      left: -18px;
    }

    .limitless-images-row > .right-small-images:last-of-type {
      top: -14px;
      right: -18px;
    }
  }
`}</style>

  </section>
);

export default UnlimitedFitnessSection;
