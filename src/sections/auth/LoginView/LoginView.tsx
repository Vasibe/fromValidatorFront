"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useLoginApi } from "@/src/api/user/authApi";
import PasswordAutomata from "../UserRegisterView/components/automatas/PasswordAutomata";
import UserAutomata from "../UserRegisterView/components/automatas/UserAutomata";
import UserPassword from "../UserRegisterView/components/userPassword";
import UserName from "../UserRegisterView/components/userName";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";

export default function LoginView() {
  const router = useRouter();
  const { loginUser } = useLoginApi();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    usernameOrEmail: "",
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
      const result = await loginUser(form);
      console.log("RESULTADO LOGINUSER:", result);

      login({
        userId: result.userId,
        userName: result.userName,
        email: result.email,
      });

      toast.success("Login exitoso");

      router.push("/");

      console.log("Respuesta del login:", result);
    } catch (error: any) {
      toast.error(error.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="container m-auto">
      <div className="w-full flex items-center justify-center flex-col">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between gap-4">
            <UserName
              value={form.usernameOrEmail}
              onChange={(value) => handleChange("usernameOrEmail", value)}
            />

            <UserPassword
              value={form.password}
              onChange={(value) => handleChange("password", value)}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Iniciar sesión
            </button>
            <p className="text-sm text-gray-600 text-center mt-4">
              ¿No tienes cuenta?{" "}
              <span
                onClick={() => router.push("/UserRegister")}
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
              >
                Regístrate aquí
              </span>
            </p>

            <span
              onClick={() => router.push("/")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              ir al inicio
            </span>
          </div>
        </form>

        {form.usernameOrEmail && <UserAutomata value={form.usernameOrEmail} />}
        {form.password && <PasswordAutomata value={form.password} />}
      </div>
    </div>
  );
}
