// app/form-register/page.tsx
"use client";

import React, { useState } from "react";
import NavBar from "@/src/components/mainNavBar";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

import { NameField, nameRegex } from "./components/NameField";
import { IdentificationField, idRegex } from "./components/IdentificationField";
import { PhoneField, phoneRegex } from "./components/PhoneField";
import { DateField, dateRegex } from "./components/DateField";
import { AgeField, ageRegex } from "./components/AgeField";
import { GenderField, genderRegex } from "./components/GenderField";
import { DescriptionField } from "./components/DescriptionField";
import { TermsField } from "./components/TermsField";
import { Toast } from "@/src/components/toast";
import FooterSection from "../HomePage/components/FooterSection";
import { useFormRegister } from "@/src/hooks/useFormRegister";


const FormRegister: React.FC = () => {
  const links = [
    { nombre: "Home", href: "/", active: false },
    { nombre: "Servicios", href: "/" },
    { nombre: "Contacto", href: "/" },
  ];
  const profileButton = { nombre: "Mi perfil", href: "/" };
  
  const {
    formData,
    handleInputChange,
    resetForm,
    showValidation,
    triggerValidation,
  } = useFormRegister();

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  const validateForm = (): boolean => {
    const validations = [
      nameRegex.test(formData.name.trim()),
      idRegex.test(formData.identification.trim()),
      phoneRegex.test(formData.phone.trim()),
      dateRegex.test(formData.date.trim()),
      ageRegex.test(formData.age.trim()),
      genderRegex.test(formData.gender.trim()),
      formData.description.trim().length >= 10,
      formData.acceptTerms
    ];

    return validations.every(validation => validation);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    triggerValidation();

    if (!validateForm()) {
      setToast({
        show: true,
        message: "Por favor corrige los errores en el formulario",
        type: "error",
      });
      return;
    }

    console.log("Datos del formulario:", formData);

    setToast({
      show: true,
      message: "¡Formulario enviado correctamente!",
      type: "success",
    });

    setTimeout(() => {
      resetForm();
    }, 2000);
  };

  return (
    <div>
      <NavBar links={links} profileButton={profileButton} />

      <section className="w-full flex justify-center px-4 py-10 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl space-y-6"
          noValidate
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formulario de inscripción
          </h1>

          <NameField 
            value={formData.name} 
            onChange={handleInputChange} 
            showValidation={showValidation}
          />
          <IdentificationField 
            value={formData.identification} 
            onChange={handleInputChange} 
            showValidation={showValidation}
          />
          <PhoneField 
            value={formData.phone} 
            onChange={handleInputChange} 
            showValidation={showValidation}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DateField 
              value={formData.date} 
              onChange={handleInputChange} 
              showValidation={showValidation}
            />
            <AgeField 
              value={formData.age} 
              onChange={handleInputChange} 
              showValidation={showValidation}
            />
            <GenderField 
              value={formData.gender} 
              onChange={handleInputChange} 
              showValidation={showValidation}
            />
          </div>

          <DescriptionField 
            value={formData.description} 
            onChange={handleInputChange} 
            showValidation={showValidation}
          />
          
          <TermsField 
            checked={formData.acceptTerms} 
            onChange={handleInputChange} 
            error={showValidation && !formData.acceptTerms ? "Debes aceptar los términos y condiciones" : undefined}
          />

          <button
            type="submit"
            className="inline-block bg-[#F15A24] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-[0_4px_12px_rgba(241,90,36,0.35)] hover:bg-[#e25522] transition-colors w-full md:w-auto"
          >
            Enviar Formulario
          </button>
        </form>
      </section>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((prev) => ({ ...prev, show: false }))}
          duration={4000}
        />
      )}

      <FooterSection
        brandName="GymInfinity"
        year={2025}
        mainLinks={[
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        legalLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookies Settings", href: "/cookies" },
        ]}
        socialLinks={[
          { label: "Facebook", href: "/", icon: <Facebook size={18} /> },
          { label: "Instagram", href: "/", icon: <Instagram size={18} /> },
          { label: "X", href: "#", icon: <Twitter size={18} /> },
          { label: "LinkedIn", href: "/", icon: <Linkedin size={18} /> },
          { label: "YouTube", href: "/", icon: <Youtube size={18} /> },
        ]}
      />
    </div>
  );
};

export default FormRegister;