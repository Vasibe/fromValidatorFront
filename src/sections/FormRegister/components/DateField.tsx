
import { useFieldValidation } from "@/src/hooks/useFormValidationFormRegister";
import React from "react";

interface DateFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onBlur?: () => void;
  showValidation?: boolean;
}

const dateRegex = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/

export const DateField: React.FC<DateFieldProps> = ({ 
  value, onChange, error: externalError, onBlur, showValidation = false 
}) => {
  const { error, handleBlur } = useFieldValidation({
    value,
    regex: dateRegex
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
        Fecha nacimiento
      </label>
      <input
        type="text"
        name="date"
        placeholder="YYYY-MM-DD"
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

export { dateRegex };