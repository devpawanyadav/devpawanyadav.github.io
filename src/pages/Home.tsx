import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-dark-text">
            Hi, I'm <span className="text-primary dark:text-accent">Pawan Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-8">
            Full Stack Developer | React Specialist | Tech Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          <p className="mb-4">
            I create modern web applications with a focus on performance,
            accessibility, and user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-primary hover:bg-secondary dark:bg-accent dark:hover:bg-primary text-white rounded-lg transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Frontend Development",
              description: "Building responsive and interactive user interfaces with modern technologies."
            },
            {
              title: "Backend Development",
              description: "Creating robust and scalable server-side solutions."
            },
            {
              title: "Full Stack Solutions",
              description: "Delivering end-to-end web applications with seamless integration."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-dark-card rounded-lg shadow-lg transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-text">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;