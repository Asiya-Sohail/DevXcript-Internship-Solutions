import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  // Data for credit progress pie chart
  const creditData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [69, 64],
        backgroundColor: ["#0ea5e9", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  // Data for GPA progress pie chart
  const gpaData = {
    labels: ["Achieved", "Remaining"],
    datasets: [
      {
        data: [3.37, 0.63],
        backgroundColor: ["#10b981", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 lg:ml-64 bg-gray-50 min-h-screen">
      {/* Profile + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-xl">BABAR AZAM</h2>
          <p className="text-sm text-gray-500">LIVCBC:556</p>
          <p className="text-xs text-gray-600">Faculty of Information Technology and Computer Science</p>
          <button className="mt-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
            BS Computer Science
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm">CGPA</p>
          <p className="text-xl font-bold text-gray-800">3.23</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm">Earned Credits</p>
          <p className="text-xl font-bold text-gray-800">69</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm">Total Credits</p>
          <p className="text-xl font-bold text-gray-800">133</p>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Credit Hours Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800">Credit Hours</h3>
          <p className="text-sm text-gray-500 mb-2">Academic Program</p>
          
          <div className="flex items-center">
            <div className="w-24 h-24 relative">
              <Doughnut data={creditData} options={chartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">52%</span>
                <span className="text-xs text-gray-500">09 | 123</span>
              </div>
            </div>
            
            <div className="ml-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <div>
                  <p className="text-sm font-medium">Completed</p>
                  <p className="text-xs text-gray-500">69 hrs</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                <div>
                  <p className="text-sm font-medium">Remaining</p>
                  <p className="text-xs text-gray-500">64 hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GPA Card */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold text-gray-800">GPA</h3>
          <p className="text-sm text-gray-500 mb-2">Academic Performance</p>
          
          <div className="flex items-center">
            <div className="w-24 h-24 relative">
              <Doughnut data={gpaData} options={chartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">84%</span>
                <span className="text-xs text-gray-500">3.37/4</span>
              </div>
            </div>
            
            <div className="ml-6">
              <p className="text-sm font-medium">Letter Grade</p>
              <p className="text-lg font-bold text-green-600">B+</p>
              <p className="text-xs text-gray-500 mt-2">Good academic standing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Today's Classes</h3>
          <p className="text-sm text-gray-500">Wednesday, April 7</p>
        </div>
        
        <div className="mt-2 border border-gray-200 p-3 rounded-lg">
          <p className="font-bold text-gray-800">Web Application Development</p>
          <p className="text-xs text-gray-500">CS323543</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-600">[Add Name]</p>
            <p className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">@DJKH - 10230 JKH</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">[Last]</p>
        </div>
        
        <div className="mt-3 border border-gray-200 p-3 rounded-lg">
          <p className="font-bold text-gray-800">Operating Systems</p>
          <p className="text-xs text-gray-500">CS323543</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-600">[Add Name]</p>
            <p className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">3 sessions scheduled</p>
          </div>
        </div>
      </div>

      {/* Current Courses */}
      <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Current Courses</h3>
          <p className="text-sm text-gray-500">Spring 2025 + 4 Enrolled Courses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Course 1 */}
          <div className="border border-gray-200 p-3 rounded-lg">
            <p className="font-bold text-gray-800">Web Application Development</p>
            <p className="text-xs text-gray-500">CS323543</p>
            <p className="text-xs text-gray-600 mt-1">Instructor: A. Aead Kamal</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-600">Credits: 3</p>
              <div className="flex space-x-2">
                <button className="text-xs text-blue-600 underline">Grade: view progress</button>
                <button className="text-xs text-blue-600 underline">Attendance: (date)</button>
              </div>
            </div>
          </div>
          
          {/* Course 2 */}
          <div className="border border-gray-200 p-3 rounded-lg">
            <p className="font-bold text-gray-800">Operating Systems - Lab</p>
            <p className="text-xs text-gray-500">CS323531</p>
            <p className="text-xs text-gray-600 mt-1">Instructor: A. Oskar Adam</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-600">Credits: 1</p>
              <div className="flex space-x-2">
                <button className="text-xs text-blue-600 underline">Grade: view progress</button>
                <button className="text-xs text-blue-600 underline">Attendance: (date)</button>
              </div>
            </div>
          </div>
          
          {/* Course 3 */}
          <div className="border border-gray-200 p-3 rounded-lg">
            <p className="font-bold text-gray-800">Introduction to Software Engineering</p>
            <p className="text-xs text-gray-500">CS323513</p>
            <p className="text-xs text-gray-600 mt-1">Instructor: A. Muhammad Baizl Al Gilani</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-600">Credits: 3</p>
              <div className="flex space-x-2">
                <button className="text-xs text-blue-600 underline">Grade: view progress</button>
                <button className="text-xs text-blue-600 underline">Attendance: (date)</button>
              </div>
            </div>
          </div>
          
          {/* Course 4 */}
          <div className="border border-gray-200 p-3 rounded-lg">
            <p className="font-bold text-gray-800">Operating Systems</p>
            <p className="text-xs text-gray-500">CS323543</p>
            <p className="text-xs text-gray-600 mt-1">Instructor: A. Dr Ashan Ghisloor</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-gray-600">Credits: 3</p>
              <div className="flex space-x-2">
                <button className="text-xs text-blue-600 underline">Grade: view progress</button>
                <button className="text-xs text-blue-600 underline">Attendance: (date)</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;