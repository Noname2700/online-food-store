
import { useState, ChangeEvent, useCallback, useRef } from "react";

export function useForm<T extends object>(
  initialValues: T,
  validate?: (values: T) => Partial<Record<keyof T, string>>,
) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [error, setError] = useState<{ [key in keyof T]?: string }>({});
  const [validity, setValidity] = useState<{ [key in keyof T]?: boolean }>({});
  const [touched, setTouched] = useState<{ [key in keyof T]?: boolean }>({});
  const [dirty, setDirty] = useState<{ [key in keyof T]?: boolean }>({});

  const initialRef = useRef<T>(initialValues);

  const isValid = (Object.keys(initialRef.current) as (keyof T)[]).every(
    (key) => validity[key] === true,
  );

  const runValidation = useCallback(
    (values: T) => {
      if (!validate) return;

      const errors = validate(values);
      setError((prev) => ({
        ...prev,
        ...errors,
      }));
      setValidity((prev) => {
        const next: { [k in keyof T]?: boolean } = { ...prev };
        (Object.keys(values) as (keyof T)[]).forEach((key) => {
          next[key] = !errors[key];
        });
        return next;
      });
    },
    [validate],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target as HTMLInputElement;
      const key = name as keyof T;

      setFormData((prev) => ({
        ...prev,
        [key]: value,
      }));

      setDirty((prev) => ({
        ...prev,
        [key]: value !== initialRef.current[key],
      }));

      setError((prevErrors) => ({
        ...prevErrors,
        [key]: e.target.validationMessage,
      }));
      setValidity((prev) => ({
        ...prev,
        [key]: e.target.validity.valid,
      }));
      runValidation({ ...formData, [key]: value });
    },
    [runValidation, formData],
  );

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const key = name as keyof T;

    setTouched((prev) => ({
      ...prev,
      [key]: true,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialRef.current);
    setError({});
    setValidity({});
    setTouched({});
    setDirty({});
  }, []);
  return {
    formData,
    handleChange,
    handleBlur,
    resetForm,
    error,
    isValid,
    touched,
    dirty,
  };
}
