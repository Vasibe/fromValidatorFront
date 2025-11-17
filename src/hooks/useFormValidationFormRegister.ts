
import { useState, useEffect } from 'react';

interface UseFieldValidationProps {
  value: string;
  regex: RegExp;
  required?: boolean;
  minLength?: number;
  customValidation?: (value: string) => string | null;
}

export const useFieldValidation = ({
  value,
  regex,
  required = true,
  minLength,
  customValidation
}: UseFieldValidationProps) => {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!touched) return;

    let newError: string | null = null;

    if (required && !value.trim()) {
      newError = 'Este campo es requerido';
    } else if (minLength && value.trim().length < minLength) {
      newError = `Mínimo ${minLength} caracteres`;
    } else if (value.trim() && !regex.test(value.trim())) {
      newError = 'Formato inválido';
    } else if (customValidation) {
      newError = customValidation(value);
    }

    setError(newError);
  }, [value, touched, regex, required, minLength, customValidation]);

  const handleBlur = () => {
    setTouched(true);
  };

  const markAsTouched = () => {
    setTouched(true);
  };

  const resetTouched = () => {
    setTouched(false);
  };

  return {
    error,
    touched,
    handleBlur,
    markAsTouched,
    resetTouched,
    isValid: !error && touched
  };
};