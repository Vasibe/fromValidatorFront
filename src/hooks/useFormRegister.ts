
import { useState } from 'react';

interface FormData {
  name: string;
  identification: string;
  phone: string;
  date: string;
  age: string;
  gender: string;
  description: string;
  acceptTerms: boolean;
}

export const useFormRegister = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    identification: '',
    phone: '',
    date: '',
    age: '',
    gender: '',
    description: '',
    acceptTerms: false,
  });

  const [showValidation, setShowValidation] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      identification: '',
      phone: '',
      date: '',
      age: '',
      gender: '',
      description: '',
      acceptTerms: false,
    });
    setShowValidation(false);
  };

  const triggerValidation = () => {
    setShowValidation(true);
  };

  return {
    formData,
    handleInputChange,
    resetForm,
    showValidation,
    triggerValidation,
  };
};