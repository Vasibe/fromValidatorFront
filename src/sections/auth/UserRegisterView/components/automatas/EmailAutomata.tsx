"use client";

import { motion } from "framer-motion";
import { StateName, useEmailAutomata } from "./useEmailAutomata";
import { useEffect, useRef } from "react";

interface Props {
  value: string;
}

export default function EmailAutomata({ value }: Props) {
  const { currentState, updateState, states, typedParts, activeStates } =
    useEmailAutomata();
  const visited = useRef<Set<StateName>>(new Set());

  useEffect(() => {
    updateState(value);
  }, [value]);

  useEffect(() => {
    visited.current.add(currentState);
  }, [currentState]);

  return (
    <div className="relative w-[60%] h-[160px] mt-5 border rounded-lg p-4">
      {/* Estados */}
      {(Object.entries(states) as [StateName, { x: number; y: number }][])
        .filter(([name]) => activeStates.includes(name))
        .map(([name, pos]) => (
          <div
            key={name}
            className="absolute"
            style={{ left: pos.x, top: pos.y }}
          >
            {/* 🔹 Texto encima del nodo */}
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-xs text-gray-700 text-center mb-1"
            >
              {typedParts[name] || ""}
            </motion.span>

            {name === "q4" && (
              <div className="state absolute border border-gray-600 rounded-full" />
            )}

            {/* 🔹 Círculo */}
            <motion.div
              className={`rounded-full border flex items-center justify-center text-sm
                `}
              style={{
                width: 60,
                height: 60,
                opacity: visited.current.has(name) ? 1 : 0,
              }}
              animate={{
                backgroundColor: currentState === name ? "#4ade80" : "#ffffff",
                scale: currentState === name ? 1 : 1,
                opacity: typedParts[name] || visited.current.has(name) ? 1 : 0,
              }}
            >
              {name}
            </motion.div>

            {["q0", "q2", "q4"].includes(name) &&
              currentState === name &&
              typedParts[name] &&
              !["@", "."].includes(typedParts[name]) && (
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-32 h-16"
                  style={{
                    top: 0,
                    transform: "translateX(-50%)",
                    left: 116,
                    height: "auto",
                  }}
                >
                  <motion.path
                    d="M15,69 C-30,-10 105,-18 70,64"
                    stroke="black"
                    fill="transparent"
                    markerStart="url(#arrowhead)"
                    animate={{
                      opacity: 1,
                    }}
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
        ))}

      {/* Transiciones */}
      <svg className="absolute inset-0 w-full h-full">
        {/* q0 -> q1 */}
        <motion.line
          x1="110"
          y1="90"
          x2="200"
          y2="90"
          stroke="black"
          strokeWidth="2"
          animate={{ opacity: typedParts.q1 ? 1 : 0 }}
        />

        {/* q1 -> q2 */}
        <motion.line
          x1="260"
          y1="90"
          x2="350"
          y2="90"
          stroke="black"
          strokeWidth="2"
          animate={{ opacity: typedParts.q2 ? 1 : 0 }}
        />

        {/* q2 -> q3 */}
        <motion.line
          x1="410"
          y1="90"
          x2="500"
          y2="90"
          stroke="black"
          strokeWidth="2"
          animate={{ opacity: typedParts.q3 ? 1 : 0 }}
        />

        {/* q3 -> q4 */}
        <motion.line
          x1="560"
          y1="90"
          x2="650"
          y2="90"
          stroke="black"
          strokeWidth="2"
          animate={{ opacity: typedParts.q4 ? 1 : 0 }}
        />
      </svg>
    </div>
  );
}
