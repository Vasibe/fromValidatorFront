"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { UserStateName, useUserAutomata } from "./useUserAutomata";

interface Props {
  value: string;
}

export default function UserAutomata({ value }: Props) {
  const { currentState, updateState, states, typedParts, activeStates } =
    useUserAutomata();
  const visited = useRef<Set<UserStateName>>(new Set());

  useEffect(() => {
    updateState(value);
  }, [value]);

  useEffect(() => {
    visited.current.add(currentState);
  }, [currentState]);

  return (
    <div className="relative w-[60%] h-[300px] mt-5 border rounded-lg p-4">
      {/* Nodos */}
      {(
        Object.entries(states) as [UserStateName, { x: number; y: number }][]
      ).map(([name, pos]) => {
        if (!activeStates.includes(name) && name !== "q0") return null; // q0 siempre visible

        return (
          <div
            key={name}
            className="absolute"
            style={{ left: pos.x, top: pos.y }}
          >
            {/* Texto encima del nodo */}
            <motion.span
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              className="block text-xs text-gray-700 text-center mb-2"
            >
              {typedParts[name] || ""}
            </motion.span>

            {/* Doble círculo para terminales p1 y p2 */}
            {(name === "q1" || name === "q2") && (
              <div className="state absolute border border-gray-600 rounded-full" />
            )}

            {/* Círculo */}
            <motion.div
              className="rounded-full border flex items-center justify-center text-sm relative"
              style={{ width: 60, height: 60 }}
              animate={{
                backgroundColor: currentState === name ? "#4ade80" : "#ffffff",
                opacity: 1,
              }}
            >
              {name}
            </motion.div>

            {/* Curva de retorno sobre terminales */}
            {(name === "q1" || name === "q2") && (
              <svg
                className="absolute"
                style={{
                  left: -10,
                  top: -40,
                  width: 60,
                  height: 40,
                  overflow: "visible",
                }}
              >
                <motion.path
                  d="M15,69 C-30,-10 105,-18 70,70"
                  stroke="black"
                  fill="transparent"
                  markerStart="url(#arrowhead)"
                  animate={{ opacity: 1 }}
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
