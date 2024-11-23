import React from 'react'
import Header from './Header'
import "../style/adminDashboard.scss";
import EmpList from './EmpList';


const AdminDashboard = ({employeeData,setEmployeeData}) => {
  return (
   <>
     <Header/>
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
