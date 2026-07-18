"use client";
import { useEffect, useRef } from "react";
import { useHandleClose } from "@/src/lib/hooks/useHandleClose";
import { useForm } from "@/src/lib/hooks/useForm";
import ModalWithForm from "@/src/component/ModalWithForms/ModalWithForm";
import { validateRegister } from "@/src/lib/hooks/validation/registerValidation";
import { UserRegisterSchema } from "@/src/schemas/userRegisterSchemas";
import { z } from "zod";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useHandleClose(isOpen, onClose, overlayRef);

  const {
    formData,
    handleChange,
    handleBlur,
    resetForm,
    error,
    isValid,
    touched,
    dirty,
  } = useForm<z.infer<typeof UserRegisterSchema>>(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateRegister,
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (!isOpen) resetForm();
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleClose={onClose}
      title="Register"
      onSubmit={handleSubmit}
      buttonText="Register"
      isFormValid={isValid && Object.values(dirty).some(Boolean)}
    >
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your name"
          required
        />
        {error.name && touched.name && (
          <span className="text-red-500 font-bold">{error.name}</span>
        )}
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
          required
        />{" "}
        {error.email && touched.email && (
          <span className="text-red-500 font-bold">{error.email}</span>
        )}
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
          required
        />{" "}
        {error.password && touched.password && (
          <span className="text-red-500 font-bold">{error.password}</span>
        )}
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm your password"
          required
        />{" "}
        {error.confirmPassword && touched.confirmPassword && (
          <span className="text-red-500 font-bold">
            {error.confirmPassword}
          </span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
