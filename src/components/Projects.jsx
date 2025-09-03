import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React, Tailwind, and Framer Motion.",
      link: "https://github.com/webbychileshe/portfolio",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce app with PHP backend and React frontend.",
      link: "https://github.com/webbychileshe/ecommerce",
    },
    {
      title: "Finance Dashboard",
      description: "Interactive financial dashboard with charts and export features.",
      link: "https://github.com/webbychileshe/finance-dashboard",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Node.js, Socket.io, and MongoDB.",
      link: "https://github.com/webbychileshe/chat-app",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Projects section"
      role="region"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 mt-4 text-center">
          Projects
        </h2>
        <p className="text-blue-200 text-lg mb-4 text-center">
          Some of the projects I've worked on:
        </p>

        {/* Projects grid - responsive layout */}
        <div className="max-h-[70vh] overflow-y-auto scrollbar-hide pr-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-medium text-blue-300"
                >
                  View Project →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
