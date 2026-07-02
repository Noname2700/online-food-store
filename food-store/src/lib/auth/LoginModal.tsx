import { useForm } from "@/src/lib/hooks/useForm";
import { useEffect, useRef } from "react";
import { UserLoginInput } from "@/src/types/user";
import { useHandleClose } from "@/src/lib/hooks/useHandleClose";
import ModalWithForm from "@/src/component/ModalWithForms/ModalWithForm";
import validateLogin from "@/src/lib/hooks/validation/login";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
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
  } = useForm<UserLoginInput>({
    email: "",
    password: "",
  }, validateLogin);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      console.log("Form invalid:", error);
      return;
    }

    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (!isOpen) resetForm();
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleClose={onClose}
      overlayRef={overlayRef}
      title="Login"
      onSubmit={handleSubmit}
      buttonText="Login"
      isFormValid={isValid && Object.values(dirty).some(Boolean)}
    >
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
        />
        {error.email && touched.email && (
          <span className="text-red-500 text-sm">{error.email}</span>
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
        />
        {error.password && touched.password && (
          <span className="text-red-500 text-sm">{error.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
