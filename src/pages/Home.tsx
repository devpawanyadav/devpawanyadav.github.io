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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-accent dark:to-primary">
            Hi, I'm Pawan Yadav
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
            Full Stack Developer | React Specialist | Tech Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          <p className="mb-4 text-lg">
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
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary dark:from-accent dark:to-primary dark:hover:from-primary dark:hover:to-accent text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
              description: "Crafting modern web interfaces using React, TypeScript, Next.js, and TailwindCSS. Specializing in responsive design, state management (Redux/Context), and performance optimization.",
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )
            },
            {
              title: "Backend Development",
              description: "Building scalable APIs and microservices using Node.js, PHP/Laravel, and Python. Expertise in database design, cloud infrastructure (AWS/GCP), and CI/CD pipelines.",
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              )
            },
            {
              title: "Full Stack Solutions",
              description: "Delivering complete web solutions with modern tech stack. Implementing secure authentication, RESTful APIs, real-time features, and containerized deployments using Docker/Kubernetes.",
              icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-primary dark:hover:border-accent group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-text group-hover:text-primary dark:group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-dark-text">
            Professional Experience
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            <p className="mb-6 text-lg">
              With over 9 years of experience in software development, I've successfully delivered enterprise-scale applications 
              and led technical teams across various industries. My expertise includes:
            </p>
            <ul className="list-disc list-inside space-y-3 mb-6 text-lg pl-4">
              <li>Architecting scalable web applications using microservices architecture</li>
              <li>Leading development of cloud-native solutions on AWS and Google Cloud</li>
              <li>Implementing CI/CD pipelines and DevOps best practices</li>
              <li>Optimizing application performance and database efficiency</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-dark-text">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "PHP", icon: <i className="devicon-php-plain colored text-2xl"></i> },
              { name: "Laravel", icon: <i className="devicon-laravel-plain colored text-2xl"></i> },
              { name: "JavaScript", icon: <i className="devicon-javascript-plain colored text-2xl"></i> },
              { name: "MySQL", icon: <i className="devicon-mysql-plain colored text-2xl"></i> },
              { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-2xl"></i> },
              { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored text-2xl"></i> },
              { name: "AWS", icon: <i className="devicon-amazonwebservices-original colored text-2xl"></i> },
              { name: "Docker", icon: <i className="devicon-docker-plain colored text-2xl"></i> },
              { name: "Google Cloud", icon: <i className="devicon-googlecloud-plain colored text-2xl"></i> },
              { name: "Kubernetes", icon: <i className="devicon-kubernetes-plain colored text-2xl"></i> },
              { name: "Jenkins", icon: <i className="devicon-jenkins-plain colored text-2xl"></i> },
              { name: "Node.js", icon: <i className="devicon-nodejs-plain colored text-2xl"></i> }
            ].map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-dark-card rounded-lg shadow-sm text-center hover:shadow-md transition-shadow flex flex-col items-center gap-2"
>
                  {skill.icon}
                  <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-24 mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-dark-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-text">
                Multi-Location Digital Presence Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built with Laravel, React, and MySQL. Implemented RESTful APIs, OAuth2 authentication, and Google Maps API integration. Achieved 99.9% uptime with AWS infrastructure.
              </p>
              <Link to="/projects" className="text-primary dark:text-accent hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-text">
                QuickSite - Website Builder
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Node.js backend with React frontend. Features serverless architecture, CI/CD pipeline with Jenkins, and containerized microservices using Docker and Kubernetes.
              </p>
              <Link to="/projects" className="text-primary dark:text-accent hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;