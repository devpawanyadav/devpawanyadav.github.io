import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "RESTful APIs"] }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-dark-text">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-8 mb-8 transition-colors"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-dark-text">Background</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
              I'm a Full Stack Developer with a passion for building web applications
              that solve real-world problems. With several years of experience in
              software development, I specialize in creating efficient, scalable,
              and user-friendly solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-dark-card rounded-lg shadow-lg p-8 transition-colors"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-dark-text">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="text-lg font-medium text-primary dark:text-accent mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                                 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;