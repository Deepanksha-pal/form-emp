import React from 'react'
import Header from './Header'
import EmpList from './EmpList';


const AdminDashboard = ({employeeData,setEmployeeData}) => {
  return (
   <>
     <Header/>
     <div className="employee-details">
     <h2 className="text-2xl font-bold text-green-600 p-6 text-start border-b-2 border-green-800">Employee Detail Table </h2>
        <div className="emp-list-container">
          <EmpList setEmployeeData={setEmployeeData} employeeData={employeeData}/>
        </div>
     </div>
   </>
  )
}

export default AdminDashboard
