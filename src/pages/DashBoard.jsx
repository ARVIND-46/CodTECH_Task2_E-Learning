import React from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import MyCalendar from '../components/MyCalendar';

const DashBoard = () => {
  return (
    <div className="w-full overflow-x-hidden px-2 md:px-4 lg:px-8">
      <Header />
      <div className="mt-4">
        <CourseCard />
      </div>
      <div className="mt-6">
        <MyCalendar />
      </div>
    </div>
  );
};

export default DashBoard;
