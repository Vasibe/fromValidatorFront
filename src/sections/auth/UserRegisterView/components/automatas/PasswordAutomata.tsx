"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { PasswordStateName, usePasswordAutomata } from "./usePasswordAutomata";

interface Props {
  value: string;
}

export default function PasswordAutomata({ value }: Props) {
  const { currentState, updateState, states, typedParts, activeStates } =
    usePasswordAutomata();

  useEffect(() => {
    updateState(value);
  }, [value]);

  return (
    <div className="relative w-[60%] h-[300px] mt-5 border rounded-lg p-4">
      {(["q0", "q1", "q2"] as PasswordStateName[]).map((name) => {
        if (!activeStates.includes(name) && name !== "q0") return null;
        const pos = states[name];

        return (
          <div
            key={name}
            className="absolute"
            style={{ left: pos.x, top: pos.y }}
          >
            {/* Texto escrito encima del estado */}
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-xs text-gray-700 text-center mb-2"
            >
              {typedParts[name] || ""}
            </motion.span>

            {/* Doble círculo para terminales */}
            {["q1", "q2"].includes(name) && (
              <div className="state absolute border border-gray-600 rounded-full" />
            )}

            <motion.div
              className="rounded-full border flex items-center justify-center text-sm relative"
              style={{ width: 60, height: 60 }}
              animate={{
                backgroundColor: currentState === name ? "#4ade80" : "#ffffff",
              }}
            >
              {name} {/* Nombre del estado dentro del círculo */}
            </motion.div>

            {/* Curva de retorno */}
            {["q1", "q2"].includes(name) && typedParts[name] && (
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-32 h-16"
                style={{
                  left: 18,
                  top: -10,
                  width: 60,
                  height: 40,
                  overflow: "visible",
                }}
              >
                <motion.path
                  d="M15,69 C-30,-10 105,-18 70,64"
                  stroke="black"
                  fill="transparent"
                  markerStart="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="10 0, 0 3.5, 10 7" fill="black" />
                  </marker>
                </defs>
              </svg>
            )}
          </div>
        );
      })}

      {/* Línea desde q0 al estado actual */}
      {currentState !== "q0" && (
        <svg className="absolute inset-0 w-full h-full">
          <motion.line
            x1={states.q0.x + 30}
            y1={states.q0.y + 30}
            x2={states[currentState].x + 30}
            y2={states[currentState].y + 30}
            stroke="black"
            strokeWidth={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </svg>
      )}
    </div>
  );
}
