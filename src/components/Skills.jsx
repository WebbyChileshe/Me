import React from 'react';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiJava, DiBootstrap } from "react-icons/di";
import { SiPhp } from "react-icons/si";

function Contacts() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" aria-label="Tech stack section" role="region">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Tech Stacks</h2>
        <p className="text-blue-200 text-lg mb-10 text-center">
          Below are the technologies I'm familiar with:
        </p>
        
        {/* Tech stack grid - responsive layout */}
        <div className="max-h-[70vh] overflow-y-auto scrollbar-hide pr-2">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <DiHtml5 className="text-4xl sm:text-5xl text-orange-500 mb-2" title="HTML5" />
              <span className="tech-name text-white text-sm sm:text-base">HTML5</span>
            </li>
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <DiCss3 className="text-4xl sm:text-5xl text-blue-500 mb-2" title="CSS3" />
              <span className="tech-name text-white text-sm sm:text-base">CSS3</span>
            </li>
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <DiJavascript className="text-4xl sm:text-5xl text-yellow-400 mb-2" title="JavaScript" />
              <span className="tech-name text-white text-sm sm:text-base">JavaScript</span>
            </li>
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <DiReact className="text-4xl sm:text-5xl text-cyan-400 mb-2" title="React" />
              <span className="tech-name text-white text-sm sm:text-base">React</span>
            </li>
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <SiPhp className="text-4xl sm:text-5xl text-purple-500 mb-2" title="PHP" />
              <span className="tech-name text-white text-sm sm:text-base">PHP</span>
            </li>
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <DiBootstrap className="text-4xl sm:text-5xl text-purple-600 mb-2" title="Bootstrap" />
              <span className="tech-name text-white text-sm sm:text-base">Bootstrap</span>
            </li>
            <li className="tech-item bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center ">
              <DiJava className="text-4xl sm:text-5xl text-red-500 mb-2" title="Java" />
              <span className="tech-name text-white text-sm sm:text-base">Java</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;