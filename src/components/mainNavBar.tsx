"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MobileDrawer } from "./drawerNavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";

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
  onProfileClick,
}: NavBarProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { user, logout } = useAuth();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
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
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "auto 1fr auto" : "1fr auto 1fr",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "flex-start" : "flex-start",
              minWidth: 0,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 5,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <Image
                src="/logoGym.png"
                alt={`Logo ${brandName}`}
                width={36}
                height={36}
                style={{ objectFit: "contain" }}
              />
            </motion.div>

            <motion.span
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#222",
                whiteSpace: "nowrap",
              }}
              whileHover={{
                color: logoColor,
                transition: { duration: 0.2 },
              }}
            >
              {brandName}
            </motion.span>
          </div>

          {!isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(1rem, 2vw, 2rem)",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
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
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.nombre}
                </motion.a>
              ))}
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              minWidth: 0,
              position: "relative",
            }}
          >
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
                  gap: "4px",
                }}
              >
                <span
                  style={{ width: "24px", height: "2px", background: "#222" }}
                />
                <span
                  style={{ width: "24px", height: "2px", background: "#222" }}
                />
                <span
                  style={{ width: "24px", height: "2px", background: "#222" }}
                />
              </motion.button>
            ) : (
              <>
                {!user && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {/* BOTÓN INICIAR SESIÓN */}
                    <motion.a
                      href="/Login"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: "#F15A24",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        borderRadius: 8,
                        fontWeight: "bold",
                        fontSize: "clamp(14px, 1.5vw, 15px)",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Iniciar sesión
                    </motion.a>

                    <motion.button
                      onClick={() => router.push("/UserRegister")}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        borderRadius: 8,
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "clamp(14px, 1.5vw, 15px)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Registrarse
                    </motion.button>
                  </div>
                )}

                {user && (
                  <div style={{ position: "relative" }}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        backgroundColor: "#F15A24",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        borderRadius: 8,
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "clamp(14px, 1.5vw, 15px)",
                      }}
                    >
                      {user.userName}
                    </motion.button>

                    {dropdownOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: "110%",
                          right: 0,
                          background: "white",
                          borderRadius: 8,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          padding: "0.5rem 1rem",
                          cursor: "pointer",
                          minWidth: "140px",
                          zIndex: 9999,
                        }}
                        onClick={() => {
                          logout();
                          router.push("/Login");
                        }}
                      >
                        <span className="text-gray-700">Cerrar sesión</span>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </motion.nav>

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
