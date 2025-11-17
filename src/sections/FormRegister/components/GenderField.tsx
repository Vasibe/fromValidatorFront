
import { useFieldValidation } from "@/src/hooks/useFormValidationFormRegister";
import React from "react";

interface GenderFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onBlur?: () => void;
  showValidation?: boolean;
}

const genderRegex = /^(masculino|femenino)$/i;

export const GenderField: React.FC<GenderFieldProps> = ({ 
  value, onChange, error: externalError, onBlur, showValidation = false 
}) => {
  const { error, handleBlur } = useFieldValidation({
    value,
    regex: genderRegex
  });

  const displayError = (showValidation || externalError) ? (externalError || error) : null;
  const isValid = !error && value.trim().length > 0;

  const handleLocalBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur();
    onBlur?.();
  };

  return (
    <div>
      <label className="block text-xs font-medium text-gray-800 mb-1">
        Género
      </label>
      <input
        type="text"
        name="gender"
        value={value}
        onChange={onChange}
        onBlur={handleLocalBlur}
        className={`w-full border rounded-sm px-3 py-2 outline-none text-sm transition-colors ${
          displayError 
            ? "border-red-500 bg-red-50" 
            : isValid && value.trim().length > 0
            ? "border-green-500 bg-green-50" 
            : "border-gray-400 hover:border-gray-500 focus:border-[#F15A24]"
        }`}
      />
      {displayError && (
        <p className="text-xs text-red-500 mt-1">{displayError}</p>
      )}
    </div>
  );
};

export { genderRegex };