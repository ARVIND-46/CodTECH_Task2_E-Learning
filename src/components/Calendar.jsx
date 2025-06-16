import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Importing styles for the calendar component
const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <Calendar
          onChange={setDate}
          value={date}
          className="react-calendar"
        />
        <p className="mt-4 text-center text-gray-700">
          Selected: {date.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default MyCalendar;
