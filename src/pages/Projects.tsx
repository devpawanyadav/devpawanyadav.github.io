import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const loadProjects = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects([
        {
          title: "Modern Portfolio",
          description: "A dynamic portfolio website showcasing modern web technologies and smooth animations",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          link: "https://github.com/pawanyd/pawanyd.github.io",
          category: 'frontend',
          image: '/portfolio-preview.png'
        },
        {
          title: "Project Management Dashboard",
          description: "Real-time project management platform with team collaboration features",
          technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
          link: "https://github.com/pawanyd/project-dashboard",
          category: 'fullstack'
        },
        {
          title: "E-commerce Platform",
          description: "Feature-rich e-commerce solution with secure payment processing",
          technologies: ["Next.js", "Stripe", "PostgreSQL", "Docker", "AWS"],
          link: "https://github.com/pawanyd/ecommerce-platform",
          category: 'fullstack'
        }
      ]);
      setIsLoading(false);
    };

    loadProjects();
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-gray-900">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  My Projects
                </span>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-12 animate-pulse" />
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              Showcasing my journey through code and creativity
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="container mx-auto px-4 -mt-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-lg p-4 flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${selectedCategory === category.id 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-accent/10'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons with subtle animation
              [...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="animate-pulse">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700" />
                    <div className="p-6">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-6" />
                      <div className="flex flex-wrap gap-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              // Actual project cards with hover effects and animations
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-dark-card rounded-2xl shadow-lg overflow-hidden
                           transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 
                                group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
                  
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 
                                   rounded-full text-sm font-medium group-hover:bg-primary/10 dark:group-hover:bg-accent/10 
                                   transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-secondary dark:text-accent 
                               dark:hover:text-primary transition-colors group-hover:translate-x-1 transform transition-transform"
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
    </div>
  );
};

export default Projects;