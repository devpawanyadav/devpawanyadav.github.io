import React from 'react';
import PageTransition from '../components/PageTransition';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <PageTransition>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
            My Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-secondary rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300
                  animate-slideUp`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-primary-dark transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;