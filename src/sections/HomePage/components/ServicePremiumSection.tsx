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
    boxShadow: "0 4px 18px rgba(0,0,0,0.06)", 
    scale: 1,
    borderColor: "rgba(0,0,0,0.04)"
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 14px 40px rgba(241, 90, 36, 0.15)",
    borderColor: "#F15A24"
  },
};

const ServicePremiumSection = () => (
  <section
    style={{
      width: "100%",
      background: "#f5f5f7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "3.5rem 1.5rem",
      boxSizing: "border-box",
    }}
  >
    <div className="services-container">
      {/* Título y subtítulo */}
      <header style={{ textAlign: "center", marginBottom: "2.8rem" }}>
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "bold",
            marginBottom: "0.75rem",
            color: "#111",
          }}
        >
          Servicios de fitness premium
        </h2>
        <p
          style={{
            maxWidth: 640,
            margin: "0 auto",
            fontSize: 16,
            color: "#444",
            opacity: 0.9,
          }}
        >
          Entrenamientos personalizados, asesoramiento experto y programas integrales para satisfacer todas tus necesidades de fitness.
        </p>
      </header>

      {/* Grid de tarjetas */}
      <div className="services-grid">
        {services.map((service) => (
          <motion.article
            key={service.id}
            className="service-card"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            style={{
              borderRadius: 20,
              background: "#fff",
              padding: "1.1rem 1.1rem 1.4rem",
              border: "2px solid", 
              borderColor: service.featured ? "#F15A24" : "rgba(0,0,0,0.04)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Efecto de overlay sutil al hover */}
            <motion.div
              className="card-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(241, 90, 36, 0.03) 0%, rgba(255, 255, 255, 0) 50%)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
            
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                marginBottom: "1rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={340}
                height={210}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <h3
              style={{
                fontSize: "1.12rem",
                fontWeight: 700,
                marginBottom: "0.55rem",
                color: "#141414",
                position: "relative",
                zIndex: 2,
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: 14.5,
                color: "#555",
                lineHeight: 1.6,
                position: "relative",
                zIndex: 2,
              }}
            >
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>

    <style jsx>{`
      .services-container {
        width: 100%;
        max-width: 1120px;
      }

      .services-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.6rem;
      }

      @media (min-width: 768px) {
        .services-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (min-width: 1080px) {
        .services-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
    `}</style>
  </section>
);

export default ServicePremiumSection;