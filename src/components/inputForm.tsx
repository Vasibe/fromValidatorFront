"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function InputForm({
  className = "",
  ...props
}: AnimatedInputProps) {
  const [focus, setFocus] = useState(false);

  return (
    <motion.div
      animate={{
        scale: focus ? 1.02 : 1,
        boxShadow: focus ? "0 0 10px rgba(0,0,0,0.5)" : "0 0 0px rgba(0,0,0,0)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-xl p-2 w-full bg-gray-100 border-2 border-[#CBD1D8]"
    >
      <input
        {...props}
        onFocus={(e) => {
          setFocus(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          props.onBlur?.(e);
        }}
        className={`
          w-full p-2 outline-none
          bg-gray-100
          ${className}
        `}
      />
    </motion.div>
  );
}
