"use client";
import UserName from "./components/userName";
import UserPassword from "./components/userPassword";
import UserEmail from "./components/userEmail";
import { useState } from "react";
import { toast } from "sonner";
import { useCreateApi } from "@/src/api/user/userCreatorApi";
import EmailAutomata from "./components/automatas/EmailAutomata";
import UserAutomata from "./components/automatas/UserAutomata";
import PasswordAutomata from "./components/automatas/PasswordAutomata";

export default function UseRegisterView() {
  const { createUser } = useCreateApi();

  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const success = await createUser(form);

      if (success) {
        toast.success("Usuario creado correctamente");
      } else {
        toast.error("No se pudo crear el usuario");
      }
    } catch (error: any) {
      toast.error(error.message || "Error al crear el usuario");
    }
  };

  return (
    <div className="container m-auto">
      <div className="w-full flex items-center justify-center flex-col">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-4">
            <UserName
              value={form.userName}
              onChange={(value) => handleChange("userName", value)}
            />
            <UserEmail
              value={form.userEmail}
              onChange={(value) => handleChange("userEmail", value)}
            />
            <UserPassword
              value={form.password}
              onChange={(value) => handleChange("password", value)}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Crear usuario
            </button>
          </div>
        </form>
        {form.userName && <UserAutomata value={form.userName} />}
        {form.userEmail && <EmailAutomata value={form.userEmail} />}
        {form.password && <PasswordAutomata value={form.password} />}
      </div>
    </div>
  );
}
