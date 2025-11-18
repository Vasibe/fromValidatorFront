import InputForm from "@/src/components/inputForm";

export default function UserPassword({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <InputForm
      name="password"
      type="password"
      placeholder="Contraseña"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
