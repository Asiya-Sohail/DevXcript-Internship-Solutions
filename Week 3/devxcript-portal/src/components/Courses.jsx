import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "Web Application Development",
      code: "CSSE3143",
      status: "Active",
      instructor: "A. Asad Kamal",
      credits: 3.0,
      gradeProgress: "view progress",
      attendance: 86.0
    },
    {
      title: "Operating Systems - Lab",
      code: "CSCS3551",
      status: "Active",
      instructor: "A. Qaisar Aslam",
      credits: 1.0,
      gradeProgress: "view progress",
      attendance: 90.0
    },
    {
      title: "Introduction to Software Engineering",
      code: "CSSE3113",
      status: "Active",
      instructor: "A. Muhammad Basit Ali Gillani",
      credits: 3.0,
      gradeProgress: "view progress",
      attendance: 73.0
    },
    {
      title: "Operating Systems",
      code: "CSCS3553",
      status: "Active",
      instructor: "A. Dr Adrian Ghafoor",
      credits: 3.0,
      gradeProgress: "view progress",
      attendance: 81.0
    }
  ];

  const stats = [
    { title: "TOTAL COURSES", value: "4" },
    { title: "ACTIVE", value: "4" },
    { title: "WITHDRAW", value: "0" },
    { title: "CURRENT CREDITS", value: "10" },
    { title: "TOTAL CREDITS", value: "10" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen lg:ml-64 transition-all duration-300">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Courses</h1>
        <div className="flex items-center mt-2 text-sm text-gray-600">
          <span>BS Computer Science</span>
          <span className="mx-2">•</span>
          <span>Spring 2025</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {stat.title}
            </p>
            <p className="text-xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Course List Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Course List</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
            Active Classes (4)
          </button>
          <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
            Withdraw (0)
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{course.code}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                {course.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-3">{course.instructor}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <p className="text-xs text-gray-500">Credits</p>
                <p className="text-sm font-medium text-gray-800">
                  {course.credits.toFixed(1)}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Grade</p>
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  {course.gradeProgress}
                </button>
              </div>

              <div>
                <p className="text-xs text-gray-500">Attendance</p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${course.attendance}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    ({course.attendance}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            Active Classes (4)
          </button>
          <span>•</span>
          <button className="text-gray-600 hover:text-gray-800">
            Withdraw (0)
          </button>
        </div>
        <p>Showing 4 of 4 courses</p>
      </div>
    </div>
  );
};

export default Courses;
