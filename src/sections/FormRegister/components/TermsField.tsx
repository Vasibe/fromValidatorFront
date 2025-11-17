import React from "react";

interface TermsFieldProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const TermsField: React.FC<TermsFieldProps> = ({ checked, onChange, error }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={checked}
          onChange={onChange}
          className={`h-4 w-4 border-gray-400 rounded ${
            error ? "border-red-500" : ""
          }`}
        />
        <span className="text-xs text-gray-700">
          Yo acepto los{" "}
          <a href="#" className="underline">
            Términos y Condiciones
          </a>
        </span>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};