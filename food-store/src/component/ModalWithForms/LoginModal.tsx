import { useState } from "react";


function LoginModal() {
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value, type, checked} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // Handle form submission logic here, such as validation and API calls
    console.log("Form submitted:", formData);
  }
  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginModal;