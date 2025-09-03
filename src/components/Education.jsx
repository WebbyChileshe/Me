import React from 'react';
import Header from './Header.jsx';

const Education = () => {
  return (
    <>
      <Header />
      <section 
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center" 
        aria-label="Education" 
        role="region"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">Education</h2>
          
          {/* Scrollable cards container */}
          <div className="max-h-[70vh] overflow-y-auto scrollbar-hide pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
              {/* Card 1 */}
              <div className=" rounded-xl shadow-lg p-6 ">
                <h3 className="text-xl font-bold text-white">
                  Grade 12 Certificate <span className="text-blue-300 text-sm">(2020)</span>
                </h3>
                <h4 className="text-blue-200 font-medium mt-2">Jasmine Boys Secondary School</h4>
                <p className="text-blue-100 mt-4">
                  Began my Secondary School journey at Jasmine Boys High School in Kabwe and successfully earned my Grade 12 Certificate.
                </p>
              </div>

              {/* Card 2 */}
              <div className=" rounded-xl shadow-lg p-6 ">
                <h3 className="text-xl font-bold text-white">
                  Artificial Intelligence Certificate <span className="text-blue-300 text-sm">(2024)</span>
                </h3>
                <h4 className="text-blue-200 font-medium mt-2">Huawei Academy</h4>
                <p className="text-blue-100 mt-4">
                  Completed a course covering Machine Learning, Deep Learning, and other foundational AI concepts.
                </p>
              </div>

              {/* Card 3 */}
              <div className=" rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Science in Computer Science <span className="text-blue-300 text-sm">(2025)</span>
                </h3>
                <h4 className="text-blue-200 font-medium mt-2">Mulungushi University</h4>
                <p className="text-blue-100 mt-4">
                  Pursuing a Computer Science Degree while working on various projects and gaining experience in software development, networking, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;