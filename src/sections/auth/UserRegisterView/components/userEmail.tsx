import InputForm from "@/src/components/inputForm";

export default function UserEmail({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <InputForm
      name="userEmail"
      type="email"
      placeholder="Email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
