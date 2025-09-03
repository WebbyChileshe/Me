import React from "react";

function CV() {
  // Replace this with the actual path to your CV PDF in public folder
  const cvFile = "/Webby Chileshe_CV.pdf";

  return (
    <section
      className="min-h-screen mt-20 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      aria-label="CV section"
      role="region"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <p className="text-blue-200 text-lg mb-8">
          You can view my CV below or download it for later.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href={cvFile}
            download
            className="bg-white/10 backdrop-blur-md !text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Download CV
          </a>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 !text-white px-6 py-3 rounded-lg shadow-lg"
          >
            View CV
          </a>
        </div>

        {/* Embedded CV preview */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg max-h-[70vh] overflow-y-auto">
          <iframe
            src={cvFile}
            title="CV Preview"
            className="w-full h-[70vh] rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CV;
