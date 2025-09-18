import React from "react";

const Attendance = () => {
  const courses = [
    {
      title: "Web Development",
      total: 42,
      present: 36,
      percentage: 85.7,
      status: "Good Standing",
      statusType: "good"
    },
    {
      title: "Database Systems",
      total: 40,
      present: 35,
      percentage: 87.5,
      status: "Good Standing",
      statusType: "good"
    },
    {
      title: "Object Oriented Programming",
      total: 38,
      present: 32,
      percentage: 84.2,
      status: "Good Standing",
      statusType: "good"
    },
    {
      title: "Computer Networks",
      total: 35,
      present: 28,
      percentage: 80.0,
      status: "",
      statusType: "neutral"
    },
    {
      title: "Data Structures",
      total: 45,
      present: 41,
      percentage: 91.1,
      status: "Good Standing",
      statusType: "good"
    },
    {
      title: "Software Engineering",
      total: 48,
      present: 30,
      percentage: 62.5,
      status: "Poor Attendance",
      statusType: "poor"
    }
  ];

  const getStatusIcon = (type) => {
    if (type === "good") return "✓";
    if (type === "poor") return "✗";
    return "";
  };

  const getStatusColor = (type) => {
    if (type === "good") return "text-green-600";
    if (type === "poor") return "text-red-600";
    return "";
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 85) return "bg-green-500";
    if (percentage >= 75) return "bg-blue-500";
    if (percentage >= 65) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen lg:ml-64 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Overview</h1>
        <p className="text-gray-600 mt-2">
          Your attendance record across all courses
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          >
            {/* Course Title */}
            <h2 className="font-bold text-lg text-gray-800 mb-4">
              {course.title}
            </h2>

            <div className="flex justify-between items-center mb-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {course.total}
                </p>
                <p className="text-xs text-gray-500 mt-1">Total</p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {course.present}
                </p>
                <p className="text-xs text-gray-500 mt-1">Present</p>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {course.percentage}%
                </p>
                <p className="text-xs text-gray-500 mt-1">Present</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className={`h-2.5 rounded-full ${getProgressColor(
                  course.percentage
                )}`}
                style={{ width: `${course.percentage}%` }}
              ></div>
            </div>

            {/* Status */}
            {course.status && (
              <div
                className={`flex items-center mt-4 ${getStatusColor(
                  course.statusType
                )}`}
              >
                <span className="font-semibold mr-2">
                  {getStatusIcon(course.statusType)}
                </span>
                <span className="text-sm font-medium">{course.status}</span>
              </div>
            )}

            {/* Divider - Only show if not the last item */}
            {index < courses.length - 1 && (
              <hr className="mt-5 -mb-5 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
