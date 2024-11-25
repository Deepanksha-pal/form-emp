import React, { useEffect, useState } from "react";
import { useParams, useNavigate    } from "react-router-dom";
import "../style/viewEmployee.scss";

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
    return <div>Employee not found</div>;
  }

  return (
    <div className="employee-detail">
      <h2>Employee Details</h2>
      <button className="back-button" onClick={() => navigate("/admin")}>
        Back to Admin
      </button>
      <div className="detail-wrapper">
      <div className="profile-image-container">
            <img
              src={employee.image}
              alt={employee.fullName}
              className="profile-image"
            />
            <button
              className="view-button"
              onClick={() => openModal(employee.image)}
            >
              View Profile Image
            </button>
          </div>
          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={modalImage} alt="Employee" className="modal-image" />
                <button className="close-button" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        <div className="detail-container">
          <div className="detail-item">
            <span className="key">Full Name:</span>
            <span className="value">{employee.fullName}</span>
          </div>
          <div className="detail-item">
            <span className="key">Email:</span>
            <span className="value">{employee.email}</span>
          </div>
          <div className="detail-item">
            <span className="key">Phone Number:</span>
            <span className="value">{employee.phoneNumber}</span>
          </div>
          <div className="detail-item">
            <span className="key">Alternate Number:</span>
            <span className="value">{employee.alternateNumber}</span>
          </div>
          <div className="detail-item">
            <span className="key">Date of Birth:</span>
            <span className="value">{employee.dob}</span>
          </div>
          <div className="detail-item">
            <span className="key">Gender:</span>
            <span className="value">{employee.gender}</span>
          </div>
          <div className="detail-item">
            <span className="key">Guardian Name:</span>
            <span className="value">{employee.guardianName}</span>
          </div>
          <div className="detail-item">
            <span className="key">Guardian Number:</span>
            <span className="value">{employee.guardianNumber}</span>
          </div>
          <div className="detail-item">
            <span className="key">Relationship:</span>
            <span className="value">{employee.relationship}</span>
          </div>
          <div className="detail-item">
            <span className="key">Permanent Address:</span>
            <span className="value">{employee.permanentAddress}</span>
          </div>
          <div className="detail-item">
            <span className="key">Residential Address:</span>
            <span className="value">{employee.residentialAddress}</span>
          </div>
          <div className="detail-item">
            <span className="key">ID Proof:</span>
            <button
              className="view-button"
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
