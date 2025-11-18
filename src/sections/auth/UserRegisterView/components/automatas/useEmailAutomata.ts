"use client";

import { useState } from "react";

export type StateName = "q0" | "q1" | "q2" | "q3" | "q4";

export function useEmailAutomata() {
  const initialParts = { q0: "", q1: "", q2: "", q3: "", q4: "" };

  const [currentState, setCurrentState] = useState<StateName>("q0");
  const [typedParts, setTypedParts] =
    useState<Record<StateName, string>>(initialParts);
  const [activeStates, setActiveStates] = useState<StateName[]>([]);

  const updateState = (value: string) => {
    let state: StateName = "q0";
    let parts = { ...initialParts };
    if (!value) {
      setCurrentState("q0");
      setTypedParts({ q0: "", q1: "", q2: "", q3: "", q4: "" });
      setActiveStates([]);
      return;
    }

    for (const char of value) {
      switch (state) {
        case "q0":
          if (/[a-zA-Z0-9._-]/.test(char)) {
            parts.q0 += char;
          } else if (char === "@") {
            state = "q1";
            parts.q1 = "@"; // ✔️ MOSTRAR EL @
          }
          break;

        case "q1":
          if (/[a-zA-Z]/.test(char)) {
            state = "q2";
            parts.q2 += char;
          }
          break;

        case "q2":
          if (/[a-zA-Z]/.test(char)) {
            parts.q2 += char;
          } else if (char === ".") {
            state = "q3";
            parts.q3 = "."; // ✔️ MOSTRAR EL PUNTO
          }
          break;

        case "q3":
          if (/[a-zA-Z]/.test(char)) {
            state = "q4";
            parts.q4 += char;
          }
          break;

        case "q4":
          if (/[a-zA-Z]/.test(char)) {
            parts.q4 += char;
          }
          break;
      }
    }

    setCurrentState(state);
    setTypedParts(parts);
    const newActive: StateName[] = (Object.keys(parts) as StateName[]).filter(
      (key) => parts[key].length > 0
    );
    setActiveStates(newActive);
  };

  return {
    currentState,
    typedParts,
    updateState,
    activeStates,
    states: {
      q0: { x: 50, y: 40 },
      q1: { x: 200, y: 40 },
      q2: { x: 350, y: 40 },
      q3: { x: 500, y: 40 },
      q4: { x: 650, y: 40 },
    },
  };
}
