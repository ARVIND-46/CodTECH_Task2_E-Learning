import React from 'react';
import { FaHome, FaVideo, FaBook, FaTasks, FaQuestionCircle,FaPaperclip } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
    const navigate = useNavigate();

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white shadow-lg p-6 fixed ">
      <h1 className="text-3xl font-bold mb-5 mt-5 text-left">Skill Box</h1>
      <hr className='mb-5'/>
      <nav>
        <ul className="space-y-4 text-lg">
          <li>
            <a onClick={() => navigate('/dashboard')} className="hover:text-indigo-300 transition"> <FaHome className="inline-block mr-2" /> Dashboard</a>
          </li>
          <li>
            <a onClick={() => navigate('/live-lessons')} className="hover:text-indigo-300 transition "> <FaVideo className="inline-block mr-2" /> Live Class</a>
          </li>
          <li>
            <a onClick={() => navigate('/recorded-lessons')} className="hover:text-indigo-300 transition"> <FaBook className="inline-block mr-2" /> Recorded Class</a>
          </li>
          <li>
            <a onClick={() => navigate('/courses')} className="hover:text-indigo-300 transition"> <FaTasks className="inline-block mr-2" /> Courses</a>
          </li>
          <li>
            <a onClick={() => navigate('/assignments')} className="hover:text-indigo-300 transition"> <FaPaperclip className="inline-block mr-2" /> Assignments</a>
          </li>
          <li>
            <a onClick={() => navigate('/help')} className="hover:text-indigo-300 transition"> <FaQuestionCircle className="inline-block mr-2" /> Help</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
