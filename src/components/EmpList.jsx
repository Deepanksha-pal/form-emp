import React, { useState } from 'react';
import { empData } from '../assets/data'
import "../style/empList.scss";

const EmpList = () => {
  const [employeeData ,setEmployeeData] = useState(empData)
  

    const handleView=(item)=>{
       console.log(item)
    }

    const handleDelete=(item)=>{
     const newEmpList= employeeData.filter((ele)=>ele.id !==item.id)
     setEmployeeData(newEmpList)
    }
  return (
    <div className='emp-list'>
      <ul>
      {
        employeeData?.map((emp)=>(
         <li className='list-item' key={emp.id}>
            <span>{emp.fullName}</span>
            <div className="button-container">

            <button onClick={()=>handleView(emp)}>View</button>
            <button className='delete' onClick={()=>handleDelete(emp)}>Delete</button>
            </div>
         </li>
        ))
      }
      </ul>
    </div>
  )
}

export default EmpList
