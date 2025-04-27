import React from 'react';
import PageTransition from '../components/PageTransition';

const About: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
  ];

  return (
    <PageTransition>
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slideUp animate-delay-100">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a passionate Full Stack Developer with experience in building
                  modern web applications. I love turning complex problems into
                  simple, beautiful, and intuitive solutions.
                </p>
                <p className="text-lg">
                  With a strong foundation in both front-end and back-end
                  development, I strive to create seamless user experiences while
                  maintaining clean and efficient code.
                </p>
              </div>
            </div>

            <div className="animate-slideUp animate-delay-200">
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-secondary p-3 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;