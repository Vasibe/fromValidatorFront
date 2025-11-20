import InputForm from "@/src/components/inputForm";
import Image from "next/image";

export default function UserPassword({
  value,
  onChange,
  showPassword,
  setShowPassword,
}: {
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}) {
  return (
    <div className="relative w-full">
      <InputForm
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-6 top-5 cursor-pointer text-gray-600 text-xl"
      >
        <Image
          src={showPassword ? "/HiddenEye.svg" : "/ShowEye.svg"}
          alt="toggle password"
          width={22}
          height={22}
        />
      </span>
    </div>
  );
}
