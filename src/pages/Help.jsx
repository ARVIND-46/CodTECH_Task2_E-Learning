import React from 'react';

const Help = () => {
  const faqs = [
    {
      question: "How do I access my recorded classes?",
      answer: "Go to the Recorded Lessons tab in the sidebar. All your recorded classes are listed there.",
    },
    {
      question: "How can I reset my password?",
      answer: "Click on your profile icon → Settings → Change Password.",
    },
    {
      question: "What if I miss a live class?",
      answer: "Live classes are recorded and uploaded within 24 hours in the Recorded Lessons section.",
    },
    {
      question: "How to submit assignments?",
      answer: "Navigate to Assignments in the sidebar. Choose your course, upload the document, and click Submit.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Help & Support</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search help topics..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
