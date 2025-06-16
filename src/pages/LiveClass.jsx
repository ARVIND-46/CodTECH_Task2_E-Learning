import React from 'react';
import { FaUserFriends, FaHourglassHalf, FaPlay } from 'react-icons/fa';
import { MdAccessTime, MdCalendarToday } from 'react-icons/md';

const liveClasses = [
  {
    id: 1,
    title: "Live UI Design Workshop",
    instructor: "Antony Johnson",
    date: "Today 2:00 PM",
    duration: "90 min",
    participants: 45,
    status: "LIVE NOW",
    image: "https://source.unsplash.com/400x200/?ui,design",
  },
  {
    id: 2,
    title: "Python Coding Session",
    instructor: "Arun",
    date: "Tomorrow 10:00 AM",
    duration: "120 min",
    participants: 32,
    image: "https://source.unsplash.com/400x200/?python,coding",
  },
  {
    id: 3,
    title: "Investment Strategy Discussion",
    instructor: "Sarath",
    date: "Jan 25, 3:00 PM",
    duration: "60 min",
    participants: 28,
    image: "https://source.unsplash.com/400x200/?finance,investment",
  },
  {
    id: 4,
    title: "Digital Art Masterclass",
    instructor: "Sankar",
    date: "Jan 26, 4:00 PM",
    duration: "150 min",
    participants: 38,
    image: "https://source.unsplash.com/400x200/?digital,art",
  },
];

const LiveClass = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Live Lessons</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveClasses.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Image & Play Button Section */}
            <div
              className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-500"
              style={{
                backgroundImage: `url(${lesson.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/60 to-purple-600/60 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <FaPlay className="text-indigo-700 text-xl" />
                </div>
              </div>
              {lesson.status && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {lesson.status}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{lesson.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{lesson.instructor}</p>

              <div className="flex items-center text-sm text-gray-700 space-x-4">
                <div className="flex items-center">
                  <MdCalendarToday className="mr-1 text-indigo-500" />
                  <span>{lesson.date}</span>
                </div>
                <div className="flex items-center">
                  <FaHourglassHalf className="mr-1 text-indigo-500" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaUserFriends className="mr-1 text-indigo-500" />
                  <span>{lesson.participants}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveClass;