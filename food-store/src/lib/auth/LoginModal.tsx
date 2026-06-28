import { useForm } from "@/src/lib/hooks/useForm";
import ModalWithForm from "@/src/component/ModalWithForms/ModalWithForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    formData,
    handleChange,
    handleBlur,
    resetForm,
    error,
    isValid,
    touched,
    dirty,
  } = useForm({
    email: "",
    password: "",
  });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};


  return (
    <ModalWithForm
      isOpen={isOpen}
      handleClose={onClose}
      title="Login"
      onSubmit={handleSubmit}
      buttonText="Login"
      isFormValid={isValid}
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
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
