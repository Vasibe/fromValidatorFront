
import { useFieldValidation } from "@/src/hooks/useFormValidationFormRegister";
import React from "react";

interface IdentificationFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onBlur?: () => void;
  showValidation?: boolean;
}

const idRegex = /^[0-9]{8,10}$/;

export const IdentificationField: React.FC<IdentificationFieldProps> = ({ 
  value, onChange, error: externalError, onBlur, showValidation = false 
}) => {
  const { error, handleBlur } = useFieldValidation({
    value,
    regex: idRegex
  });

  const displayError = (showValidation || externalError) ? (externalError || error) : null;
  const isValid = !error && value.trim().length > 0;

  const handleLocalBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur();
    onBlur?.();
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        Identificación
      </label>
      <input
        type="text"
        name="identification"
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

export { idRegex };