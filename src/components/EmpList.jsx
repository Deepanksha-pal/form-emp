import React from "react";
import { useNavigate } from "react-router-dom";

const EmpList = ({ employeeData, setEmployeeData }) => {
  const navigate = useNavigate();

  const handleView = (item) => {
    navigate(`/employee/${item.id}`);
  };

  const handleDelete = (item) => {
    const newEmpList = employeeData.filter((ele) => ele.id !== item.id);
    setEmployeeData(newEmpList);
  };

  return (
    <div className="emp-list bg-green-50 p-6 rounded-lg shadow-md">
      <ul>
        {employeeData?.map((emp) => (
          <li className="bg-white rounded-xl shadow-sm mb-4 p-4 flex justify-between items-center" key={emp.id}>
            <div className="info-container flex items-center space-x-4">
              <img
                className="circle-image w-12 h-12 rounded-full border-2 border-green-500"
                src={emp.image}
                alt={emp.fullName}
              />
              <p className="text-lg font-semibold text-green-700">{emp.fullName}</p>
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
