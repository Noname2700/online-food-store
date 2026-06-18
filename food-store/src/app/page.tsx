import React from "react";
import FoodCardList from "../component/item/FoodCardList";
import { useState } from "react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<"login" | "register" | null>(
    null,
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSwitchToLogin = () => {
    setErrorMessage("");
    setActiveModal("login");
  };

  const handleSwitchToRegister = () => {
    setErrorMessage("");
    setActiveModal("register");
  };

  const handleRegistration = async (username: string, email: string, password: string) => {
    if (!username || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
      setActiveModal(null);
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long and contain both letters and numbers.",
      );
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
      setActiveModal(null);
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Welcome to the Online Food Store</h1>
      <p>
        Explore our wide range of delicious food items and order online for a
        convenient and tasty experience.
      </p>
      <FoodCardList foodItems={[]} />
    </>
  );
}
