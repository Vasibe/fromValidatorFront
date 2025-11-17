
import { useFieldValidation } from "@/src/hooks/useFormValidationFormRegister";
import React from "react";

interface DescriptionFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  onBlur?: () => void;
  showValidation?: boolean;
}

export const DescriptionField: React.FC<DescriptionFieldProps> = ({ 
  value, onChange, error: externalError, onBlur, showValidation = false 
}) => {
  const { error, handleBlur } = useFieldValidation({
    value,
    regex: /^.{10,}$/, 
    minLength: 10
  });

  const displayError = (showValidation || externalError) ? (externalError || error) : null;
  const isValid = !error && value.trim().length >= 10;

  const handleLocalBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    handleBlur();
    onBlur?.();
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-800 mb-1">
        Descripción
      </label>
      <textarea
        name="description"
        rows={3}
        value={value}
        onChange={onChange}
        onBlur={handleLocalBlur}
        className={`w-full border rounded-sm px-3 py-2 outline-none text-sm resize-y transition-colors ${
          displayError 
            ? "border-red-500 bg-red-50" 
            : isValid && value.trim().length >= 10
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