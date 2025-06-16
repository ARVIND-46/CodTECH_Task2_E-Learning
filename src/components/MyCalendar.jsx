import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

// Sample event data
const events = {
  '2025-06-05': { title: 'UI Design Workshop', time: '2:00 PM' },
  '2025-06-12': { title: 'Python Live Session', time: '10:00 AM' },
  '2025-06-15': { title: 'Investment Webinar', time: '3:30 PM' },
};

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => date.toISOString().split('T')[0];

  return (
    <div className="p-4 w-full overflow-hidden px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Custom Header */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={handlePrevMonth}>
            <FiChevronLeft size={20} />
          </button>
          <div className="text-lg font-semibold">
            {currentDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <button onClick={handleNextMonth}>
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Calendar */}
        <Calendar
          onChange={setDate}
          value={date}
          activeStartDate={currentDate}
          onActiveStartDateChange={({ activeStartDate }) =>
            setCurrentDate(activeStartDate)
          }
          tileContent={({ date, view }) => {
            const key = formatDate(date);
            if (events[key]) {
              return (
                <div className="flex justify-center mt-1">
                  <FaCalendarAlt className="text-purple-500" size={14} />
                </div>
              );
            }
            return null;
          }}
        />

        {/* Selected Date */}
        <p className="mt-4 text-center text-gray-700">
          Selected: {date.toDateString()}
        </p>

        {/* Upcoming Events */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-md font-semibold mb-2">Upcoming Events</h3>
          <ul className="space-y-2">
            {Object.entries(events).map(([eventDate, details]) => (
              <li key={eventDate} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-indigo-600" />
                  <span>
                    {new Date(eventDate).getDate()} {details.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <FaClock className="text-pink-500" />
                  <span>{details.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
