import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    { name: "React", icon: <i className="devicon-react-original colored text-2xl"></i> },
    { name: "TypeScript", icon: <i className="devicon-typescript-plain colored text-2xl"></i> },
    { name: "Node.js", icon: <i className="devicon-nodejs-plain colored text-2xl"></i> },
    { name: "Python", icon: <i className="devicon-python-plain colored text-2xl"></i> },
    { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-2xl"></i> },
    { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored text-2xl"></i> },
    { name: "Docker", icon: <i className="devicon-docker-plain colored text-2xl"></i> },
    { name: "AWS", icon: <i className="devicon-amazonwebservices-original colored text-2xl"></i> }
  ];

  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and performant web applications with modern frameworks and tools.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Backend Development",
      description: "Creating scalable and secure server-side applications with modern architectures.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      )
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development with modern tech stack and best practices.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="text-5xl md:text-7xl font-bold mb-6 relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary">
                Hi, I'm Pawan Yadav
              </span>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-12 animate-pulse" />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light"
            >
              Full Stack Developer | React Specialist | Tech Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row justify-center items-center gap-4"
            >
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary 
                         dark:from-accent dark:to-primary dark:hover:from-primary dark:hover:to-accent text-white 
                         rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 
                         text-gray-900 dark:text-gray-100 rounded-lg transition-all duration-300 transform 
                         hover:scale-105 hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg transition-all duration-300 
                         hover:shadow-2xl border border-transparent hover:border-primary dark:hover:border-accent group"
              >
                <div className="text-primary dark:text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-text 
                           group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-dark-text"
          >
            Technical Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm text-center 
                         hover:shadow-md transition-all duration-300 flex flex-col items-center gap-2"
              >
                {skill.icon}
                <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;