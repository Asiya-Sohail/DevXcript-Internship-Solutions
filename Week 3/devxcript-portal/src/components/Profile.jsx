import React, { useState } from "react";
import useAuthStore from "../store/authStore";

const Profile = () => {
  const { user, updateProfile } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || ""
  });

  // For demo purposes, use mock data if user is not logged in
  const student = user || {
    name: "BABAR AZAM",
    id: "LIVCBC:556",
    program: "BS Computer Science",
    faculty: "Faculty of Information Technology and Computer Science",
    cgpa: 3.23,
    earnedCredits: 69,
    totalCredits: 133,
    email: "babar.azam@university.edu",
    phone: "+92 300 1234567",
    enrollmentDate: "Fall 2022",
    expectedGraduation: "Spring 2026",
    address: "123 Main Street, Lahore, Pakistan"
  };

  const academicStats = [
    { title: "CGPA", value: student.cgpa, color: "text-blue-600" },
    { title: "Earned Credits", value: student.earnedCredits, color: "text-green-600" },
    { title: "Total Credits", value: student.totalCredits, color: "text-gray-800" },
    { title: "Completion", value: `${Math.round((student.earnedCredits / student.totalCredits) * 100)}%`, color: "text-purple-600" }
  ];

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      updateProfile(formData);
    } else {
      // Start editing - populate form with current data
      setFormData({
        name: student.name,
        email: student.email,
        phone: student.phone,
        address: student.address
      });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen lg:ml-64 transition-all">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Student Profile</h1>
        <p className="text-gray-600 mt-2">Academic and personal information</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Profile Header with Avatar */}
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
          <div className="flex flex-col items-center">
            {/* User Icon in Circle */}
            <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-4 border-4 border-white">
              <svg
                className="w-12 h-12 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            {/* Name and ID */}
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="text-xl font-bold text-gray-800 bg-white border border-gray-300 rounded px-3 py-1 mb-2 text-center"
              />
            ) : (
              <h2 className="text-xl font-bold text-gray-800">{student.name}</h2>
            )}
            <p className="text-sm text-gray-600">{student.id}</p>

            {/* Program Badge */}
            <div className="mt-3 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {student.program}
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Academic Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Academic Information
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Faculty</span>
                  <span className="font-medium text-gray-800">
                    {student.faculty}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Enrollment Date</span>
                  <span className="font-medium text-gray-800">
                    {student.enrollmentDate}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Graduation</span>
                  <span className="font-medium text-gray-800">
                    {student.expectedGraduation}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex-1 border border-gray-300 rounded px-3 py-1"
                    />
                  ) : (
                    <span className="text-gray-800">{student.email}</span>
                  )}
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 border border-gray-300 rounded px-3 py-1"
                    />
                  ) : (
                    <span className="text-gray-800">{student.phone}</span>
                  )}
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-500 mr-3 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="flex-1 border border-gray-300 rounded px-3 py-1"
                    />
                  ) : (
                    <span className="text-gray-800">{student.address}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Stats */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Academic Performance
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {academicStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className={`text-xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button 
              onClick={handleEditToggle}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                isEditing 
                  ? "bg-green-600 text-white hover:bg-green-700" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
            
            {isEditing && (
              <button 
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            )}
            
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Download Transcript
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;