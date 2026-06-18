import React, { useState, ChangeEvent, useRef } from "react";
import { UserRegisterInput } from "@/src/types/user";
import { useHandleClose } from "@/src/lib/hooks/useHandleClose";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  useHandleClose(isOpen, onClose, overlayRef);

  const [formData, setFormData] = useState<UserRegisterInput>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (!isOpen) return null;

  return (
    <div ref={overlayRef}>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter a your name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            placeholder="Enter your password"
            required
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterModal;
