import React, { useState } from 'react'
import "../style/login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    
    const predefinedUser = {
      email: "admin@example.com",
      password: "Admin@123",
    };
    const navigate=useNavigate()

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validation for empty fields
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields.");
        return;
      }
      
      if (formData.email !== predefinedUser.email) {
        alert("Incorrect User ID.");
        return;
      }
  
      // Password validation regex
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  
      if (!passwordRegex.test(formData.password)) {
        alert("Incorrect password");
        return;
      }
  
      // Check if credentials match the predefined user
      if (
        formData.email === predefinedUser.email &&
        formData.password === predefinedUser.password
      ) {
        console.log("Login successful", formData);
        navigate("/admin");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    };

    const handleChange=(e)=>{
        const {name,value}=e.target
       setFormData(prev=>(
        {
            ...prev,
            [name]:value
        }
       ))
       
    }
   
  return (
    <div className="divcenter">
    <div className="login-container">
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <div className="input-form">
        <label>Email ID:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-form">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  </div>
  )
}

export default Login
