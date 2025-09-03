import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Contacts() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Contact section"
      role="region"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Contact
        </h2>
        <p className="text-blue-200 text-lg mb-10 text-center">
          Connect with me on social platforms:
        </p>

        {/* Contact grid - responsive layout */}
        <div className="max-h-[60vh] overflow-y-auto scrollbar-hide pr-2">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <li className="contact-item bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center">
              <a
                href="mailto:webbychileshe27@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <FaEnvelope className="text-4xl sm:text-5xl text-red-400 mb-2" title="Email" />
                <span className="text-white text-sm sm:text-base">Email</span>
              </a>
            </li>
            <li className="contact-item bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center">
              <a
                href="https://www.linkedin.com/in/webbychileshe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <FaLinkedin className="text-4xl sm:text-5xl text-blue-400 mb-2" title="LinkedIn" />
                <span className="text-white text-sm sm:text-base">LinkedIn</span>
              </a>
            </li>
            <li className="contact-item bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center">
              <a
                href="https://github.com/webbychileshe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <FaGithub className="text-4xl sm:text-5xl text-gray-300 mb-2" title="GitHub" />
                <span className="text-white text-sm sm:text-base">GitHub</span>
              </a>
            </li>
            <li className="contact-item bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center">
              <a
                href="https://wa.me/260973071983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <FaWhatsapp className="text-4xl sm:text-5xl text-green-400 mb-2" title="WhatsApp" />
                <span className="text-white text-sm sm:text-base">WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
