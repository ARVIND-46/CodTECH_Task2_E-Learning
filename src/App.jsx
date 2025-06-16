import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import DashBoard from './pages/DashBoard';
import RecordedClass from './pages/RecordedClass';
import LiveClass from './pages/LiveClass';
import Courses from './pages/Courses';
import Help from './pages/Help';
import Assignments from './pages/Assignment';
import './styles/styles.css'
import Footer from './pages/Footer';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Close when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        closeSidebar();
      }
    };

    const handleScroll = () => {
      if (window.innerWidth < 768) closeSidebar();
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <Router>
      {/* Hamburger Toggle Button - hidden when sidebar is open */}
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-4 left-1 z-50 bg-transparent text-black p-2"
          onClick={toggleSidebar}
        >
          ☰
        </button>
      )}

      <div className="flex">
        {/* Sidebar */}
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidebarRef={sidebarRef} />

        {/* Main Content */}
        <div className="flex-1 p-6 md:ml-64 mt-12 md:mt-0">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/recorded-lessons" element={<RecordedClass />} />
            <Route path="/live-lessons" element={<LiveClass />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/help" element={<Help />} />
          </Routes>
          
        </div>
       
      </div>
       
    </Router>
    <Footer />
    
    </>
  );
};

export default App;
