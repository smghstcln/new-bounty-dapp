import { useState, ChangeEvent } from 'react';

type FormType = {
  [key: string]: string;
};

type UseFormReturnType = [
  form: FormType,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  resetForm: () => void
];

export const useForm = (initialValues: FormType): UseFormReturnType => {
  const [form, setForm] = useState<FormType>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return [form, handleChange, resetForm];
};
