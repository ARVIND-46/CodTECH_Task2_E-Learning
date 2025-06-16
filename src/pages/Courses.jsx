import React from 'react';
import { FaChalkboardTeacher, FaVideo } from 'react-icons/fa';

const courseList = [
  { title: "Python Mastery", lessons: 18, instructor: "Antony", progress: 70 },
  { title: "Java Fundamentals", lessons: 22, instructor: "Johnson", progress: 40 },
  { title: "JavaScript Essentials", lessons: 15, instructor: "Joshuva", progress: 60 },
  { title: "Machine Learning Basics", lessons: 25, instructor: "Arundhathi", progress: 30 },
  { title: "React for Beginners", lessons: 10, instructor: "Arvind", progress: 90 },
  { title: "Cyber Security 101", lessons: 12, instructor: "Kiran Kumar", progress: 50 },
  { title: "Cloud Computing", lessons: 20, instructor: "Kiran Kumar", progress: 10 },
  { title: "Blockchain Development", lessons: 17, instructor: "Kennedy", progress: 80 },
  { title: "Video Editing Skills", lessons: 14, instructor: "Sarath", progress: 25 },
];

const Courses = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 transition hover:scale-[1.01]"
          >
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

            <p className="flex items-center text-sm text-gray-600 mb-1">
              <FaVideo className="mr-2 text-indigo-500" /> {course.lessons} Video Lessons
            </p>

            <p className="flex items-center text-sm text-gray-600 mb-3">
              {course.instructor}
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 w-full rounded-lg mb-3 flex items-center justify-center space-x-2">
              <span>Watch Now</span> <span>▶️</span>
            </button>

            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
