import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false); 
  // const [error, setError] = useState(null); 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Password validation regex
    // const passwordRegex =
    //   /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // if (!passwordRegex.test(formData.password)) {
    //   alert('Password must be at least 8 characters long and include an uppercase letter, a digit, and a special character.');
    //   return;
    // }

    try {
      setIsLoading(true); 
      // setError(null); 

    
      const response = await fetch('http://127.0.0.1:8000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      console.log("line 51", result)
      if (result.data) {
        setFormData(result.data)
        console.log(formData)
        alert(result.message)
        // console.log('Login successful', result);
        setIsAuthenticated(true); 
        // localStorage.setItem('authToken', result.token);
        navigate('/admin');
      } else {
        throw new Error('Invalid response from server.');
      }
    } catch (err) {
      // setError(err.message);
      throw new Error("Error while fetching data from Api",err);
    } finally {
      setIsLoading(false); 
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
  
  if(isLoading){
    return(
      <Loader/>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-green-600 text-start border-b-2 border-green-800">
            Admin Login
          </h2>
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
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {/* {error && <div className="mt-4 text-red-600">{error}</div>} */}
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
