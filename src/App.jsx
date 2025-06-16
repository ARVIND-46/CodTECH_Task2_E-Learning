import React from 'react';
import '../../e-learning/src/styles/styles.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import DashBoard from './pages/DashBoard';
import RecordedClass from './pages/RecordedClass';
import { useState } from 'react';


const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <Router>
      <div className="flex">
        {/* Sidebar on the left */}
        <SideBar />

        {/* Main content on the right */}
        <div className="flex-1 p-6 ml-64"> {/* `ml-64` to offset sidebar width */}
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/recorded-lessons" element={<RecordedClass />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
