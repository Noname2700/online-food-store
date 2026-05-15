import { useState } from "react";

function RegisterModal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div>
     <form action="">
        <input type="text" name="username" />
     </form>
    </div>
  );
}
