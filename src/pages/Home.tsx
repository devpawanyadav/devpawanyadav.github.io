import React from 'react';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="animate-slideUp animate-delay-100">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Pawan Yadav</span>
          </h1>
        </div>
        
        <div className="animate-slideUp animate-delay-200">
          <h2 className="text-2xl md:text-3xl mb-6">
            I'm a Full Stack Developer
          </h2>
        </div>
        
        <div className="animate-slideUp animate-delay-300 space-y-4">
          <p className="text-lg md:text-xl max-w-2xl">
            I create engaging web experiences with modern technologies.
            Passionate about clean code and user-centric design.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;