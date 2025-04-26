import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      // Simulate loading projects from an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects([
        {
          title: "Portfolio Website",
          description: "A modern portfolio website built with React and TypeScript",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          link: "https://github.com/pawanyd/pawanyd.github.io"
        },
        {
          title: "Project Management Dashboard",
          description: "A comprehensive project management tool with real-time updates",
          technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
          link: "https://github.com/pawanyd/project-dashboard"
        },
        {
          title: "E-commerce Platform",
          description: "Full-featured e-commerce solution with payment integration",
          technologies: ["Next.js", "Stripe", "PostgreSQL", "Docker"],
          link: "https://github.com/pawanyd/ecommerce-platform"
        }
      ]);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-dark-text">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="animate-pulse">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-6" />
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden transition-colors"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary dark:text-accent dark:hover:text-primary transition-colors inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;