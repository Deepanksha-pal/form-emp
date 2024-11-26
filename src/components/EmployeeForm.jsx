import React, { useState } from 'react';
import "../style/employeeForm.scss";
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    gender: '',
    phoneNumber: '',
    alternateNumber: '',
    residentialAddress: '',
    permanentAddress: '',
    guardianName: '',
    relationship: '',
    guardianNumber: '',
    image: null,
    idProof: null,
    token:""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert("Form submitted successfully...")
    setFormData({
        fullName: '',
        email: '',
        dob: '',
        gender: '',
        phoneNumber: '',
        alternateNumber: '',
        residentialAddress: '',
        permanentAddress: '',
        guardianName: '',
        relationship: '',
        guardianNumber: '',
        image: "",
        idProof: "",
        token:""
      })

      navigate("/")
  };

  return (
    <>
    <div className="employee-form">
    <h2 className='emp-heading'>Empoyee Form</h2>
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-form">
        <label>Employee Token: </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Your Token"
          value={formData.token}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Full Name: </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Your Name"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>DOB: </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Gender: </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="input-form">
        <label>Phone Number: </label>
        <input
          type="number"
          name="phoneNumber"
          placeholder="Enter Mobile Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Alternate Number: </label>
        <input
          type="number"
          name="alternateNumber"
          placeholder="Enter Mobile Number"
          value={formData.alternateNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Residential Address: </label>
        <textarea
          name="residentialAddress"
          cols="30"
          rows="10"
          placeholder="Enter Residential Address"
          value={formData.residentialAddress}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Permanent Address: </label>
        <textarea
          name="permanentAddress"
          cols="30"
          rows="10"
          placeholder="Enter Permanent Address"
          value={formData.permanentAddress}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Guardian Name: </label>
        <input
          type="text"
          name="guardianName"
          placeholder="Enter Guardian Name"
          value={formData.guardianName}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Relationship: </label>
        <input
          type="text"
          name="relationship"
          placeholder="Enter Your Relationship with Guardian"
          value={formData.relationship}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Guardian Number: </label>
        <input
          type="text"
          name="guardianNumber"
          placeholder="Enter Guardian Number"
          value={formData.guardianNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-form">
        <label>Your Image: </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="input-form">
        <label>Upload Your ID Proof: </label>
        <input
          type="file"
          name="idProof"
          accept=".pdf,.jpg,.png"
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default EmployeeForm;
