import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaUser,
  FaCheckCircle,
  FaTimesCircle,
  FaUpload,
} from 'react-icons/fa';

const initialAssignments = [
  { title: "Python Basics Quiz", due: "2025-06-20", instructor: "Antony", submitted: true },
  { title: "Java OOP Assignment", due: "2025-06-22", instructor: "Johnson", submitted: false },
  { title: "ML Model Report", due: "2025-06-25", instructor: "Arundhathi", submitted: false },
  { title: "Cyber Security Lab", due: "2025-06-23", instructor: "Kiran Kumar", submitted: true },
  { title: "Cloud Deployment Task", due: "2025-06-24", instructor: "Kiran Kumar", submitted: false },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [selectedFiles, setSelectedFiles] = useState({});

  const handleFileChange = (e, index) => {
    const newFiles = { ...selectedFiles, [index]: e.target.files[0] };
    setSelectedFiles(newFiles);
  };

  const handleUpload = (index) => {
    if (!selectedFiles[index]) {
      alert("Please select a file to upload.");
      return;
    }

    // Simulate successful upload
    const updatedAssignments = [...assignments];
    updatedAssignments[index].submitted = true;
    setAssignments(updatedAssignments);

    // Optionally clear file selection
    const newFiles = { ...selectedFiles };
    delete newFiles[index];
    setSelectedFiles(newFiles);

    alert("File uploaded successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border-l-4 border-indigo-500 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>

            <p className="text-sm text-gray-600 flex items-center mb-1">
              <FaCalendarAlt className="mr-2 text-indigo-500" />
              Due: {assignment.due}
            </p>

            <p className="text-sm text-gray-600 flex items-center mb-3">
              <FaUser className="mr-2 text-indigo-500" />
              Instructor: {assignment.instructor}
            </p>

            <p
              className={`text-sm font-semibold mb-3 flex items-center ${
                assignment.submitted ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {assignment.submitted ? (
                <>
                  <FaCheckCircle className="mr-2" /> Submitted
                </>
              ) : (
                <>
                  <FaTimesCircle className="mr-2" /> Pending
                </>
              )}
            </p>

            {!assignment.submitted && (
              <>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => handleFileChange(e, index)}
                  className="mb-2 w-full text-sm"
                />
                {selectedFiles[index] && (
                  <p className="text-sm text-gray-600 mb-2">
                    Selected: {selectedFiles[index].name}
                  </p>
                )}
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 w-full rounded-md flex items-center justify-center"
                  onClick={() => handleUpload(index)}
                >
                  <FaUpload className="mr-2" /> Upload
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
