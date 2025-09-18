import React, { useState } from "react";

const Results = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("all");
  
  const resultsData = [
    {
      id: 1,
      term: "Spring 2023",
      gradingPoints: 63.34,
      cumulativeGP: 63.34,
      cr: 19,
      totalCr: 19,
      sgpa: 3.33,
      cgpa: 3.33
    },
    {
      id: 2,
      term: "Fall 2023",
      gradingPoints: 52.32,
      cumulativeGP: 115.6,
      cr: 17,
      totalCr: 36,
      sgpa: 3.08,
      cgpa: 3.21
    },
    {
      id: 3,
      term: "Spring 2024",
      gradingPoints: 59.33,
      cumulativeGP: 174.9,
      cr: 16,
      totalCr: 52,
      sgpa: 3.71,
      cgpa: 3.37
    },
    {
      id: 4,
      term: "Fall 2024",
      gradingPoints: 61.25,
      cumulativeGP: 236.15,
      cr: 18,
      totalCr: 70,
      sgpa: 3.4,
      cgpa: 3.37
    },
    {
      id: 5,
      term: "Spring 2025",
      gradingPoints: 67.8,
      cumulativeGP: 303.95,
      cr: 20,
      totalCr: 90,
      sgpa: 3.39,
      cgpa: 3.38
    }
  ];

  // Filter results based on search term and filter
  const filteredResults = resultsData.filter(result => {
    const matchesSearch = 
      result.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.id.toString().includes(searchTerm) ||
      result.sgpa.toString().includes(searchTerm) ||
      result.cgpa.toString().includes(searchTerm);
    
    if (filterTerm === "all") return matchesSearch;
    if (filterTerm === "high-sgpa") return matchesSearch && result.sgpa >= 3.5;
    if (filterTerm === "low-sgpa") return matchesSearch && result.sgpa < 3.0;
    if (filterTerm === "high-cgpa") return matchesSearch && result.cgpa >= 3.5;
    if (filterTerm === "low-cgpa") return matchesSearch && result.cgpa < 3.0;
    
    return matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen lg:ml-64 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Your Results</h1>
        <p className="text-gray-600 mt-2">Academic performance across all semesters</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by term, ID, SGPA, or CGPA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Filter Dropdown */}
          <div className="w-full md:w-48">
            <select
              className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={filterTerm}
              onChange={(e) => setFilterTerm(e.target.value)}
            >
              <option value="all">All Results</option>
              <option value="high-sgpa">High SGPA (≥ 3.5)</option>
              <option value="low-sgpa">Low SGPA (&lt; 3.0)</option>
              <option value="high-cgpa">High CGPA (≥ 3.5)</option>
              <option value="low-cgpa">Low CGPA (&lt; 3.0)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">TERM</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">GRADING POINTS</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">CUMULATIVE GP</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">CR</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">TOTAL CR</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">SGPA</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase">CGPA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredResults.map((result, index) => (
                <tr key={result.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{result.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{result.term}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{result.gradingPoints}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{result.cumulativeGP}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{result.cr}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{result.totalCr}</td>
                  <td className="px-6 py-4 text-sm font-medium text-blue-700">{result.sgpa}</td>
                  <td className="px-6 py-4 text-sm font-medium text-green-700">{result.cgpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-500 uppercase">Total Semesters</p>
          <p className="text-xl font-bold text-gray-800">{resultsData.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-500 uppercase">Current SGPA</p>
          <p className="text-xl font-bold text-blue-700">{resultsData[resultsData.length - 1].sgpa}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-500 uppercase">Current CGPA</p>
          <p className="text-xl font-bold text-green-700">{resultsData[resultsData.length - 1].cgpa}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-medium text-gray-500 uppercase">Total Credits</p>
          <p className="text-xl font-bold text-gray-800">{resultsData[resultsData.length - 1].totalCr}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
