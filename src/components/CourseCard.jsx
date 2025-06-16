import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';

const categories = [
  "UI Design",
  "UX Design",
  "Programming Languages",
  "Finance & Investing",
  "Drawing & Art",
];

const courseList = [
  { title: "Python Mastery", lessons: 18, instructor: "Antony", progress: 70, category: "Programming Languages" },
  { title: "Java Fundamentals", lessons: 22, instructor: "Johnson", progress: 40, category: "Programming Languages" },
  { title: "JavaScript Essentials", lessons: 15, instructor: "Joshuva", progress: 60, category: "Programming Languages" },
  { title: "Machine Learning Basics", lessons: 25, instructor: "Arundhathi", progress: 30, category: "Programming Languages" },
  { title: "React for Beginners", lessons: 10, instructor: "Arvind", progress: 90, category: "Programming Languages" },
  { title: "Cyber Security 101", lessons: 12, instructor: "Kiran Kumar", progress: 50, category: "Finance & Investing" },
  { title: "Cloud Computing", lessons: 20, instructor: "Kiran Kumar", progress: 10, category: "Finance & Investing" },
  { title: "Blockchain Development", lessons: 17, instructor: "Kennedy", progress: 80, category: "Finance & Investing" },
  { title: "UI Design Fundamentals", lessons: 20, instructor: "Antony", progress: 60, category: "UI Design" },
  { title: "UX Design Principles", lessons: 15, instructor: "Johnson", progress: 50, category: "UX Design" },
  { title: "Video Editing Skills", lessons: 14, instructor: "Sarath", progress: 25, category: "Drawing & Art" },
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  const filteredCourses = courseList.filter(
    (course) => course.category === activeCategory
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition hover:scale-[1.01]"
          >
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

            <p className="flex items-center text-sm text-gray-600 mb-1">
              <FaVideo className="mr-2 text-indigo-500" /> {course.lessons} Video Lessons
            </p>

            <p className="text-sm text-gray-600 mb-3">
              Instructor: {course.instructor}
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
