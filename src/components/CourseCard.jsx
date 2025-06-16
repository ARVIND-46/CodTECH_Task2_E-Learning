import React from 'react'

const CourseCard = () => {
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 mt-4" >
            <h2 className="text-xl font-semibold mb-2">Course Title</h2>
            <ul className="flex flex-row gap-4 mt-2 mb-4 cursor-pointer">
                <li className="hover:text-indigo-600 hover:underline">Python</li>
                <li className="hover:text-indigo-600 hover:underline">JavaScript</li>
                <li className="hover:text-indigo-600 hover:underline">React</li>
                <li className="hover:text-indigo-600 hover:underline">Node.js</li>
                <li className="hover:text-indigo-600 hover:underline">Machine Learning</li>
            </ul>
            
        </div>
    </>
  )
}

export default CourseCard