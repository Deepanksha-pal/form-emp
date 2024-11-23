import React from 'react';
import "../style/empList.scss";
import { useNavigate } from 'react-router-dom';

const EmpList = ({employeeData,setEmployeeData}) => {
     const navigate = useNavigate()
  

    const handleView=(item)=>{
      navigate(`/employee/${item.id}`);
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
