import React from 'react';
import {
  FaHome, FaVideo, FaBook, FaTasks, FaQuestionCircle, FaPaperclip, FaTimes
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar, sidebarRef }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    toggleSidebar(); // Auto close on mobile
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white shadow-lg p-6 z-40 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Close button for mobile */}
      <div className="flex justify-between items-center md:hidden mb-4">
        <h1 className="text-2xl font-bold">Skill Box</h1>
        <button onClick={toggleSidebar} className="text-white text-xl">
          <FaTimes />
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-5 mt-5 text-left hidden md:block">Skill Box</h1>
      <hr className="mb-5 hidden md:block" />

      <nav>
        <ul className="space-y-4 text-lg">
          <li>
            <span onClick={() => handleNavigate('/dashboard')} className="hover:text-indigo-300 transition cursor-pointer">
              <FaHome className="inline-block mr-2" /> Dashboard
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigate('/live-lessons')} className="hover:text-indigo-300 transition cursor-pointer">
              <FaVideo className="inline-block mr-2" /> Live Class
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigate('/recorded-lessons')} className="hover:text-indigo-300 transition cursor-pointer">
              <FaBook className="inline-block mr-2" /> Recorded Class
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigate('/courses')} className="hover:text-indigo-300 transition cursor-pointer">
              <FaTasks className="inline-block mr-2" /> Courses
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigate('/assignments')} className="hover:text-indigo-300 transition cursor-pointer">
              <FaPaperclip className="inline-block mr-2" /> Assignments
            </span>
          </li>
          <li>
            <span onClick={() => handleNavigate('/help')} className="hover:text-indigo-300 transition cursor-pointer">
              <FaQuestionCircle className="inline-block mr-2" /> Help
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
