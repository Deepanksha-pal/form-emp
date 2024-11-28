import React, { useState } from 'react'
import Header from './Header'
import EmpList from './EmpList';


const AdminDashboard = ({employeeData,setEmployeeData}) => {
  const [token, setToken] = useState('');

  const generateToken = async() => {
    // const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // setToken(newToken);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/generate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result,"line 25")
      if (result.status === "success" && result.data.token) {
        setToken(result.data.token);
      } else {
        throw new Error(result.message || "Failed to generate token");
      }
    } catch (error) {
      alert("Error generating token: " + error.message);
    }
  };

  const copyTokenToClipboard = () => {
    navigator.clipboard.writeText(token);
    alert("Token copied to clipboard!");
    setToken("")
  };
  return (
   <>
     <Header/>
     <div className="token-container p-4 bg-gray-100 rounded-lg shadow-md w-1/3 text-center my-5 mx-auto">
      <button 
        onClick={generateToken} 
        className="generate-token-button px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
      >
        Generate Token
      </button>
  {token && (
    <div className="token-display mt-4 p-4 bg-white border border-gray-300 rounded">
        <strong>Generated Token</strong> 
      <p className="mb-2 text-gray-800 break-words">
      {token}
      </p>
      <button 
        onClick={copyTokenToClipboard} 
        className="copy-token-button px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
      >
        Copy Token
      </button>
    </div>
  )}
</div>
     <div className="employee-details">
     <h2 className="text-2xl font-bold text-green-600 p-6 text-start border-b-2 border-green-800">Employee Detail Table </h2>
        <div className="emp-list-container place-items-center">
          <EmpList setEmployeeData={setEmployeeData} employeeData={employeeData}/>
        </div>
     </div>
   </>
  )
}

export default AdminDashboard
