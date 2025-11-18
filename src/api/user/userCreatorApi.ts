"use client";
import { useState } from "react";
import { toast } from "sonner";

interface CreateUserDto {
  userName: string;
  userEmail: string;
  password: string;
}

export function useCreateApi() {
  const [loading, setLoading] = useState(false);

  const createUser = async (data: CreateUserDto) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/create/users`,
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
        throw new Error(errorData.message || "Error al crear usuario");
      }

      return true;
    } catch (error: any) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading };
}
