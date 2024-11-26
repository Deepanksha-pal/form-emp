import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewEmployee = ({ employeeData, setEmployeeData }) => {
  const [employee, setEmployee] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const newEmployee = employeeData.find((emp) => emp.id.toString() === id);
    setEmployee(newEmployee);
  }, [id, employeeData]);

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  if (!employee) {
    return <div className="text-center text-xl text-red-500">Employee not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center border-green-500 border-b-2 pb-4 text-gray-800 mb-6">Employee Details</h2>
      <button
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
        onClick={() => navigate("/admin")}
      >
        Back to Admin
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex justify-center items-center flex-col">
          <div className="relative mb-4">
            <img
              src={employee.image}
              alt={employee.fullName}
              className="w-48 h-48 object-cover rounded-full border-4 border-green-600"
            />
            <button
              className="absolute bottom-2 right-2 bg-green-600 text-white py-1 px-2 rounded-full shadow-md hover:bg-green-700"
              onClick={() => openModal(employee.image)}
            >
              View Profile Image
            </button>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
              <div className="bg-white p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                <img src={modalImage} alt="Employee" className="w-full h-auto rounded-lg" />
                <button
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Full Name:</span>
            <span className="text-gray-700">{employee.fullName}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Email:</span>
            <span className="text-gray-700">{employee.email}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Phone Number:</span>
            <span className="text-gray-700">{employee.phoneNumber}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Alternate Number:</span>
            <span className="text-gray-700">{employee.alternateNumber}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Date of Birth:</span>
            <span className="text-gray-700">{employee.dob}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Gender:</span>
            <span className="text-gray-700">{employee.gender}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Guardian Name:</span>
            <span className="text-gray-700">{employee.guardianName}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Guardian Number:</span>
            <span className="text-gray-700">{employee.guardianNumber}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Relationship:</span>
            <span className="text-gray-700">{employee.relationship}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Permanent Address:</span>
            <span className="text-gray-700">{employee.permanentAddress}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">Residential Address:</span>
            <span className="text-gray-700">{employee.residentialAddress}</span>
          </div>
          <div className="flex">
            <span className="font-semibold text-green-800 w-40">ID Proof:</span>
            <button
              className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
              onClick={() => openModal(employee.idProof)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
