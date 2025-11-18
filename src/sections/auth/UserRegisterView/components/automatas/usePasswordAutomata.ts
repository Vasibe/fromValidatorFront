"use client";
import { useState } from "react";

export type PasswordStateName = "q0" | "q1" | "q2";

export function usePasswordAutomata() {
  const initialParts: Record<PasswordStateName, string> = {
    q0: "",
    q1: "",
    q2: "",
  };
  const [currentState, setCurrentState] = useState<PasswordStateName>("q0");
  const [typedParts, setTypedParts] = useState(initialParts);
  const [activeStates, setActiveStates] = useState<PasswordStateName[]>([]);

  const updateState = (value: string) => {
    let parts = { ...initialParts };
    let state: PasswordStateName = "q0";

    for (const char of value) {
      if (/[a-zA-Z]/.test(char)) {
        parts.q1 += char;
        state = "q1";
      } else if (/[\d._\-@!#$%]/.test(char)) {
        parts.q2 += char;
        state = "q2";
      }
    }

    if (value === "") {
      state = "q0";
    }

    setCurrentState(state);
    setTypedParts(parts);

    const newActive: PasswordStateName[] = (
      Object.keys(parts) as PasswordStateName[]
    ).filter((k) => parts[k].length > 0);
    setActiveStates(newActive.length ? newActive : ["q0"]);
  };

  return {
    currentState,
    typedParts,
    updateState,
    activeStates,
    states: {
      q0: { x: 100, y: 100 }, // inicio izquierda
      q1: { x: 600, y: 40 }, // letras
      q2: { x: 600, y: 200 }, // números o especiales
    } as Record<PasswordStateName, { x: number; y: number }>,
  };
}
