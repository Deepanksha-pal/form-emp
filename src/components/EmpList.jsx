import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const EmpList = ({ employeeData, setEmployeeData }) => {
  const [empData, setEmpData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loader state
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleView = (item) => {
    navigate(`/employee/${item.id}`);
  };

  const handleDelete = (item) => {
    const newEmpList = employeeData.filter((ele) => ele.id !== item.id);
    setEmployeeData(newEmpList);
  };

  const fetchData = async()=>{
    try {
      setIsLoading(true);
      setError(null)
      const response =await fetch("http://127.0.0.1:8000/api/getemployees")
      if(!response.ok){
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const result = await response.json()
      console.log(result,"line 30")
      if(result){
        setEmpData(result.data)
        console.log(empData,"data from line 32")
      }
  
    } catch (error) {
      setError(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
    console.log("object")
    console.log(empData,"line 40")
  },[])




  if(isLoading){
    return(
      <>
        <Loader/>
      </>
    )
  }

  if(error){
    return(
     <div className="text-bold text-red">Error: {error}</div>
    )
  }

  return (
    <div className="emp-list bg-green-50 p-6 rounded-lg shadow-md w-[70%]">
      <ul>
        {empData?.map((emp) => (
          <li className="bg-white rounded-xl shadow-sm mb-4 p-4 flex justify-between items-center" key={emp.id}>
            <div className="info-container flex items-center space-x-4">
              <img
                className="circle-image w-12 h-12 rounded-full border-2 border-green-500"
                src='http://localhost:8000/storage/images/C9abRo9I2f1T6faK3ynqq0NEjsJS3npd5z3bMQgG.jpg' //Path for the employee image
                alt={emp.full_name}
              />
              <p className="text-lg font-semibold text-green-700">{emp.full_name}</p>
            </div>
            <div className="button-container flex space-x-4">
              <button
                onClick={() => handleView(emp)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                View
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => handleDelete(emp)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default EmpList;
