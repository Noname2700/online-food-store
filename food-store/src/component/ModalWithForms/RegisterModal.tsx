import React, { useState, ChangeEvent,} from "react";
import { UserRegisterInput } from "@/src/types/user";


function RegisterModal() {
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

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as validation and API calls
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <form  method="post" onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="name">
          {" "}
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
          Email{" "}
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
