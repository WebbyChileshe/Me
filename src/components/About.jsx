import React from "react";
import Header from "./Header.jsx";

const About = () => {
  return (
    <>
      <Header />
      <section 
        className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center" 
        aria-label="About section" 
        role="region"
      >
        <div className="max-w-4xl mx-auto w-full rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">
              About Me
            </h2>
            <div className="h-1 w-50 mx-auto mb-2 rounded-full"></div>
            
            {/* Scrollable content container */}
            <div className="max-h-[70vh] overflow-y-auto scrollbar-hide pr-2">
              <p className="text-white text-lg leading-relaxed mb-6">
                I am a dedicated and passionate software developer currently pursuing a Bachelor of Science
                in Computer Science at Mulungushi University. My journey in technology began with a strong 
                foundation in computer science, and I have since developed a keen interest in creating efficient
                and user-friendly solutions.
              </p>
              <p className="text-white text-lg leading-relaxed mb-6">
                I have completed an Artificial Intelligence Certificate from Huawei Academy, where I gained
                valuable insights into machine learning and deep learning. Throughout my internships at Chesco-Tech, 
                I have honed my skills in PHP programming, web application development, and system software testing.
              </p>
              <p className="text-white text-lg leading-relaxed">
                I have successfully collaborated with teams to deliver client-focused solutions, 
                developed websites, and created CRM software for work management. My recent projects, 
                including an online business management system and a basic e-commerce website,
                showcase my ability to apply my knowledge in real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;