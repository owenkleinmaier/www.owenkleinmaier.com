import React from "react";

const ResumePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-white w-full">
      <h1 className="text-4xl font-bold mb-8">My Resume</h1>
      {/* Embed the PDF */}
      <iframe
        src="/Resume.pdf"
        className="w-full h-[75vh] mb-4"
        title="Resume PDF"
      />
      {/* Download Link */}
      <a
        href="/Resume.pdf"
        download
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors dark:bg-blue-400 dark:hover:bg-blue-500"
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumePage;
