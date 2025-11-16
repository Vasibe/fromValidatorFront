"use client";

import React, { useState } from "react";

const bgImage = "/HeroGym.png";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section
      className="
        w-full 
        min-h-[280px] 
        flex 
        items-center 
        justify-center 
        py-12 
        px-4 
        bg-cover 
        bg-center 
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-[1100px] flex items-center justify-center">
        <div className="text-center text-white max-w-[720px]">
          
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Take the First Step Towards a
            <br /> Healthier You
          </h2>

          {/* Subtítulo */}
          <p className="text-sm md:text-base leading-relaxed max-w-[640px] mx-auto mb-6 opacity-90">
            Join FitLife Studio Today and Transform Your Life with Expert Guidance, Personalized Programs,
            and a Supportive Community. Your Fitness Journey Starts Now!
          </p>

          {/* Formulario */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3 w-full">
            
            {/* Input */}
            <input
              type="text"
              placeholder="Enter your email"
              className="
                bg-white 
                text-gray-800 
                rounded-full 
                px-5 
                py-3 
                min-w-[260px] 
                max-w-[360px] 
                w-full 
                shadow-xl 
                outline-none 
                placeholder:text-gray-500
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Botón */}
            <button
              className="
                bg-[#ff6a32] 
                text-white 
                rounded-full 
                px-6 
                py-3 
                font-semibold 
                text-sm 
                shadow-xl 
                transition-all 
                duration-200 
                hover:bg-[#ff814f] 
                hover:-translate-y-1
              "
            >
              Join Now
            </button>
          </div>

          {/* Términos */}
          <p className="text-xs opacity-80 max-w-[500px] mx-auto">
            By clicking Sign Up you're confirming that you agree with our{" "}
            <span className="underline cursor-pointer">Terms and Conditions</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
