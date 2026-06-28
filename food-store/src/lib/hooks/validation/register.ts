import { UserRegisterInput } from "@/src/types/user";

const validateRegister = (values: UserRegisterInput) => {
    const errors: Partial<Record<keyof UserRegisterInput, string>> = {};

    if (!values.name || values.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters.";
    }

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address.";
    }

    if (!values.password || values.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    } else if (
      !/[A-Z]/.test(values.password) ||
      !/[0-9]/.test(values.password)
    ) {
      errors.password =
        "Password must contain at least one uppercase letter and one number.";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  export default validateRegister;