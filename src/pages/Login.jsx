import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const predefinedUser = {
    email: 'admin@example.com',
    password: 'Admin@123',
  };
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.email !== predefinedUser.email) {
      alert('Incorrect User ID.');
      return;
    }

    // Password validation regex
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      alert('Incorrect password');
      return;
    }

    // Check if credentials match the predefined user
    if (
      formData.email === predefinedUser.email &&
      formData.password === predefinedUser.password
    ) {
      console.log('Login successful', formData);
      setIsAuthenticated(true); // Set authenticated only if login is successful
      navigate('/admin');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistration = () => {
    navigate('/employeeform');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-green-600 text-start border-b-2 border-green-800">Admin Login</h2>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-700">
              Email ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-green-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border border-green-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-green-600">Employee Registration Form</p>
          <button
            onClick={handleRegistration}
            className="mt-2 px-4 py-2 text-green-500 border border-green-500 rounded-2xl hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
