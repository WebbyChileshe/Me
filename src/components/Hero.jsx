import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const roles = [
    'Web Development',
    'Mobile Development',
    'UI/UX Designing',
    'Software Engineering',
  ];

  return (
    <>
      {/* Mobile buttons - hidden on larger screens */}
      <div className="fixed bottom-0 left-0 w-full flex justify-around bg-transparent p-2 z-50 md:hidden">
        <button className="flex-1 mx-2 py-2 text-center rounded-lg bg-blue-600 text-white text-shadow shadow-md">
          View Work
        </button>
        <button className="flex-1 mx-2 py-2 text-center rounded-lg border border-white text-white text-shadow">
          Contact
        </button>
      </div>

      <section 
        className="h-screen w-full text-white flex flex-col justify-center items-start px-[6vw] fixed top-0 isolate bg-cover bg-center bg-no-repeat bg-fixed md:items-start md:text-left"
        style={{
          backgroundImage: " url('../assets/hero.jpg')"
        }}
        aria-label="Introduction section"
        role="region"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 z-[-1]"></div>
        
        <div className="mx-auto w-full">
          <h1 className="max-w-[650px] text-[clamp(1.5rem,4vw,3rem)] mb-4 leading-[1.3] font-bold text-shadow-md animate-fadeInUp">
            Frontend Web Developer in{' '}
            <span className="inline-block text-blue-500 min-h-[1.1em]">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 50,
                  cursor: '_',
                }}
              />
            </span>
          </h1>
          <p className="max-w-[600px] text-[clamp(1rem,2.5vw,1.5rem)] mt-2 text-shadow-md font-normal animate-fadeInUp animation-delay-300">
            Hi! I'm Webby Chileshe a frontend web developer. <br className="hidden md:inline" />
            Welcome to my tech world, please feel free to snoop around
          </p>
          
          {/* Desktop buttons - hidden on mobile */}
          <div className="hidden md:flex gap-4 mt-6">
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;