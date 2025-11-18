"use client";
import { useState } from "react";

export type UserStateName = "q0" | "q1" | "q2";

export function useUserAutomata() {
  const initialParts: Record<UserStateName, string> = {
    q0: "",
    q1: "",
    q2: "",
  };
  const [currentState, setCurrentState] = useState<UserStateName>("q0");
  const [typedParts, setTypedParts] = useState(initialParts);
  const [activeStates, setActiveStates] = useState<UserStateName[]>([]);

  const updateState = (value: string) => {
    let parts = { ...initialParts };
    let state: UserStateName = "q0";

    if (!value) {
      setCurrentState("q0");
      setTypedParts(parts);
      setActiveStates([]);
      return;
    }

    for (const char of value) {
      if (/[a-zA-Z]/.test(char)) {
        parts.q1 += char;
        state = "q1";
      } else if (/[\d._-]/.test(char)) {
        parts.q2 += char;
        state = "q2";
      }
    }

    setCurrentState(state);
    setTypedParts(parts);

    const newActive: UserStateName[] = (
      Object.keys(parts) as UserStateName[]
    ).filter((k) => parts[k].length > 0);
    setActiveStates(newActive);
  };

  return {
    currentState,
    typedParts,
    updateState,
    activeStates,
    states: {
      q0: { x: 100, y: 100 },
      q1: { x: 600, y: 40 },
      q2: { x: 600, y: 200 },
    } as Record<UserStateName, { x: number; y: number }>,
  };
}
