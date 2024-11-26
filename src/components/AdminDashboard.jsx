import React, { useState } from 'react'
import Header from './Header'
import "../style/adminDashboard.scss";
import EmpList from './EmpList';


const AdminDashboard = ({employeeData,setEmployeeData}) => {
  const [token, setToken] = useState('');
  const generateToken = () => {
    const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setToken(newToken);
  };

  const copyTokenToClipboard = () => {
    navigator.clipboard.writeText(token);
    alert("Token copied to clipboard!");
    setToken("")
  };
  return (
   <>
     <Header/>
      <div className="token-container">   
      <button onClick={generateToken} className="generate-token-button">Generate Token</button>
      {token && (
        <div className="token-display">
          <p><strong>Generated Token:</strong> {token}</p>
          <button onClick={copyTokenToClipboard} className="copy-token-button">Copy Token</button>
        </div>
      )}
      </div>   
     <div className="employee-details">
        <h2>Employee Detail Table </h2>
        <div className="emp-list-container">
          <EmpList setEmployeeData={setEmployeeData} employeeData={employeeData}/>
        </div>
     </div>
   </>
  )
}

export default AdminDashboard
