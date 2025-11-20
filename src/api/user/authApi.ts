"use client";
import { useState } from "react";
import { toast } from "sonner";

interface LoginDto {
  usernameOrEmail: string;
  password: string;
}

export function useLoginApi() {
  const [loading, setLoading] = useState(false);

  const loginUser = async (data: LoginDto) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error en el login");
      }

      const result = await res.json();
      return result; // Puede ser token, usuario, etc.
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading };
}
