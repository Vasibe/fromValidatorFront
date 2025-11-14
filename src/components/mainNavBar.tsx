"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MobileDrawer } from "./drawerNavBar";
import Image from "next/image"; // ← Importar Image

interface LinkItem {
  nombre: string;
  href: string;
  active?: boolean;
}

interface ProfileButton {
  nombre: string;
  href: string;
}

interface NavBarProps {
  links?: LinkItem[];
  profileButton?: ProfileButton;
  brandName?: string;
  logoColor?: string;
  onLinkClick?: (link: LinkItem) => void;
  onProfileClick?: () => void;
}

const NavBar = ({ 
  links = [], 
  profileButton = { nombre: "Mi perfil", href: "/profile" },
  brandName = "Gymfinity",
  logoColor = "#F15A24",
  onLinkClick,
  onProfileClick
}: NavBarProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "100%",
          background: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
          padding: "1rem 2rem",
          boxSizing: "border-box",
          overflow: "hidden"
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'auto 1fr auto' : '1fr auto 1fr',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '1rem'
        }}>
          
          {/* Logo y nombre  */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'flex-start',
            minWidth: 0
          }}>
            {/* Logo PNG con animación */}
            <motion.div
              whileHover={{ 
                scale: 1.15, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <Image
                src="/logoGym.png"
                alt={`Logo ${brandName}`}
                width={36}
                height={36}
                style={{
                  objectFit: "contain"
                }}
              />
            </motion.div>
            

            <motion.span 
              style={{
                marginLeft: '8px',
                fontWeight: "bold", 
                fontSize: "20px", 
                color: "#222",
                whiteSpace: 'nowrap'
              }}
              whileHover={{ 
                color: logoColor,
                transition: { duration: 0.2 }
              }}
            >
              {brandName}
            </motion.span>
          </div>

          {/* Links dinámicos - Solo en desktop */}
          {!isMobile && (
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "clamp(1rem, 2vw, 2rem)",
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {links.map((link, idx) => (
                <motion.a
                  key={link.nombre + idx}
                  href={link.href}
                  whileHover={{ scale: 1.1, color: "#F15A24" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    if (onLinkClick) {
                      e.preventDefault();
                      onLinkClick(link);
                    }
                  }}
                  style={{
                    color: link.active ? "#F15A24" : "#222",
                    textDecoration: "none",
                    fontWeight: link.active ? "bold" : "normal",
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    cursor: "pointer",
                    whiteSpace: 'nowrap'
                  }}
                >
                  {link.nombre}
                </motion.a>
              ))}
            </div>
          )}

          {/* Botón perfil o menú hamburguesa */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            minWidth: 0
          }}>
            {isMobile ? (
              <motion.button
                onClick={() => setDrawerOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px"
                }}
              >
                <span style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#222",
                  display: "block"
                }} />
                <span style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#222",
                  display: "block"
                }} />
                <span style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#222",
                  display: "block"
                }} />
              </motion.button>
            ) : (
              <motion.a
                href={profileButton.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  if (onProfileClick) {
                    e.preventDefault();
                    onProfileClick();
                  }
                }}
                style={{
                  backgroundColor: "#F15A24",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1.5rem",
                  borderRadius: 8,
                  fontWeight: "bold",
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  textDecoration: "none",
                  display: "inline-block",
                  whiteSpace: 'nowrap'
                }}
              >
                {profileButton.nombre}
              </motion.a>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        links={links}
        profileButton={profileButton}
        brandName={brandName}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onLinkClick={onLinkClick}
        onProfileClick={onProfileClick}
      />
    </>
  );
};

export default NavBar;