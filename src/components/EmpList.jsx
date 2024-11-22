import React from 'react';
import { empData } from '../assets/data'
import "../style/empList.scss";

const EmpList = () => {

    console.log(empData)
  return (
    <div className='emp-list'>
      <ul>
      {
        empData?.map((emp)=>(
         <li className='list-item' key={emp.id}>
            <span>{emp.fullName}</span>
            <div className="button-container">

            <button>View</button>
            <button>Delete</button>
            </div>
         </li>
        ))
      }
      </ul>
    </div>
  )
}

export default EmpList
