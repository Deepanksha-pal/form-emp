import React, { useState } from "react";
import "../style/employeeForm.scss";
import { useNavigate,Link } from "react-router-dom";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    alternateNumber: "",
    residentialAddress: "",
    permanentAddress: "",
    guardianName: "",
    relationship: "",
    guardianNumber: "",
    image: null,
    idProof: null,
    token: "",
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
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully...");
    setFormData({
      fullName: "",
      email: "",
      dob: "",
      gender: "",
      phoneNumber: "",
      alternateNumber: "",
      residentialAddress: "",
      permanentAddress: "",
      guardianName: "",
      relationship: "",
      guardianNumber: "",
      image: "",
      idProof: "",
      token: "",
    });

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 text-start mb-10 border-b-2 border-green-700 p-2 flex justify-between items-center">
  <span>Employee Form</span>
  <Link
    to="/"
    className="text-sm font-medium bg-green-600 p-2 rounded-2xl text-white hover:text-green-600 hover:bg-white"
  >
    Back to Login
  </Link>
</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Your Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-600"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-600"
              >
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter Mobile Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="alternateNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Alternate Number
              </label>
              <input
                type="number"
                name="alternateNumber"
                placeholder="Enter Alternate Mobile Number"
                value={formData.alternateNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="residentialAddress"
                className="block text-sm font-medium text-gray-600"
              >
                Residential Address
              </label>
              <textarea
                name="residentialAddress"
                rows="4"
                placeholder="Enter Residential Address"
                value={formData.residentialAddress}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-gray-600"
              >
                Permanent Address
              </label>
              <textarea
                name="permanentAddress"
                rows="4"
                placeholder="Enter Permanent Address"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="guardianName"
                className="block text-sm font-medium text-gray-600"
              >
                Guardian Name
              </label>
              <input
                type="text"
                name="guardianName"
                placeholder="Enter Guardian Name"
                value={formData.guardianName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="guardianNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Guardian Number
              </label>
              <input
                type="text"
                name="guardianNumber"
                placeholder="Enter Guardian Number"
                value={formData.guardianNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Your Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="idProof"
              className="block text-sm font-medium text-gray-600"
            >
              Upload Your ID Proof
            </label>
            <input
              type="file"
              name="idProof"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
              className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="token"
              className="block text-sm font-medium text-gray-600"
            >
              Enter Token
            </label>
            <input
              type="text"
              name="token"
              value={formData.token}
              placeholder="Enter token here"
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
