"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // ← Importar Image de Next.js

interface LinkItem {
  nombre: string;
  href: string;
  active?: boolean;
}

interface ProfileButton {
  nombre: string;
  href: string;
}

interface MobileDrawerProps {
  links: LinkItem[];
  profileButton: ProfileButton;
  brandName: string;
  isOpen: boolean;
  onClose: () => void;
  onLinkClick?: (link: LinkItem) => void;
  onProfileClick?: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  links,
  profileButton,
  brandName,
  isOpen,
  onClose,
  onLinkClick,
  onProfileClick
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay con más suavidad */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 40
            }}
          />
          
          {/* Drawer con más suavidad */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              mass: 0.8 
            }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              backgroundColor: "white",
              zIndex: 50,
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.1)"
            }}
          >
            {/* Header del Drawer con animación - CON IMAGEN PNG */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                marginBottom: "2rem" 
              }}
            >
              {/* Logo PNG con animación */}
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Image
                  src="/logoGym.png" 
                  alt={`Logo ${brandName}`}
                  width={32}
                  height={32}
                  style={{
                    objectFit: "contain"
                  }}
                />
              </motion.div>
              
              <motion.span 
                style={{
                  marginLeft: '8px',
                  fontWeight: "bold", 
                  fontSize: "18px", 
                  color: "#222"
                }}
                whileHover={{ color: "#F15A24" }}
                transition={{ duration: 0.2 }}
              >
                {brandName}
              </motion.span>
            </motion.div>

            {/* Resto del código permanece igual */}
            <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "1rem",
              flex: 1
            }}>
              {links.map((link, idx) => (
                <motion.div
                  key={link.nombre + idx}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.2 + idx * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      if (onLinkClick) {
                        e.preventDefault();
                        onLinkClick(link);
                      }
                      onClose();
                    }}
                    style={{
                      color: link.active ? "#F15A24" : "#222",
                      textDecoration: "none",
                      fontWeight: link.active ? "bold" : "normal",
                      fontSize: "16px",
                      cursor: "pointer",
                      padding: "0.75rem 1rem",
                      display: "block",
                      borderRadius: "8px",
                      transition: "all 0.2s ease"
                    }}
                    whileHover={{
                      backgroundColor: "rgba(241, 90, 36, 0.08)",
                      color: "#F15A24",
                      scale: 1.02,
                      paddingLeft: "1.5rem",
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25 
                      }
                    }}
                    whileTap={{
                      scale: 0.98,
                      backgroundColor: "rgba(241, 90, 36, 0.12)",
                      transition: { duration: 0.1 }
                    }}
                  >
                    {link.nombre}
                  </motion.a>
                  
                  {link.active && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                      style={{
                        height: "2px",
                        backgroundColor: "#F15A24",
                        marginTop: "4px",
                        borderRadius: "2px"
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.6, 
                type: "spring", 
                stiffness: 300,
                damping: 20 
              }}
            >
              <motion.button
                onClick={(e) => {
                  if (onProfileClick) {
                    e.preventDefault();
                    onProfileClick();
                  }
                  onClose();
                }}
                style={{
                  backgroundColor: "#F15A24",
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  cursor: "pointer",
                  marginTop: "auto",
                  width: "100%",
                  boxShadow: "0 4px 12px rgba(241, 90, 36, 0.3)"
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#e04a1a",
                  boxShadow: "0 6px 16px rgba(241, 90, 36, 0.4)",
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }
                }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: "#c93d15",
                  boxShadow: "0 2px 8px rgba(241, 90, 36, 0.3)",
                  transition: { duration: 0.1 }
                }}
              >
                {profileButton.nombre}
              </motion.button>
            </motion.div>

            <motion.button
              onClick={onClose}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#666",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%"
              }}
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                color: "#F15A24",
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(0, 0, 0, 0.1)"
              }}
            >
              ×
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};