import InputForm from "@/src/components/inputForm";

export default function UserName({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <InputForm
      name="userName"
      type="text"
      placeholder="Nombre de usuario"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
