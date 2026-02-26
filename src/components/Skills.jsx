import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TiltCard from './TiltCard';
import './Skills.css';

const skillCategories = [
  {
    title: 'Architecture & Design',
    color: 'accent',
    skills: [
      { name: 'System Design (LLD/HLD)', level: 95 },
      { name: 'Microservices', level: 92 },
      { name: 'High-Traffic Solutions', level: 90 },
      { name: 'Performance Optimization', level: 88 },
    ],
  },
  {
    title: 'Backend Development',
    color: 'cyan',
    skills: [
      { name: 'PHP / CakePHP', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'RESTful / SOAP APIs', level: 93 },
    ],
  },
  {
    title: 'Databases & Caching',
    color: 'green',
    skills: [
      { name: 'MySQL', level: 93 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 85 },
      { name: 'Query Optimization', level: 90 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: 'orange',
    skills: [
      { name: 'AWS (EC2, S3, RDS)', level: 88 },
      { name: 'CloudFront / CDN', level: 85 },
      { name: 'Linux Server Admin', level: 87 },
      { name: 'CI/CD Pipelines', level: 80 },
    ],
  },
  {
    title: 'Frontend & No-Code',
    color: 'pink',
    skills: [
      { name: 'JavaScript / ES6+', level: 90 },
      { name: 'jQuery / AJAX', level: 92 },
      { name: 'WebRTC', level: 78 },
      { name: 'No-Code Platforms', level: 95 },
    ],
  },
  {
    title: 'Emerging Tech',
    color: 'accent',
    skills: [
      { name: 'AI/ML Integration', level: 80 },
      { name: 'Computer Vision', level: 72 },
      { name: 'Real-time Processing', level: 85 },
      { name: 'Emotion Recognition', level: 75 },
    ],
  },
];

const techLogos = [
  'PHP', 'Python', 'JavaScript', 'Node.js', 'MySQL', 'MongoDB',
  'Redis', 'AWS', 'Docker', 'Git', 'Linux', 'React',
  'Google APIs', 'WebRTC', 'REST', 'GraphQL',
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const glareColors = {
  accent: 'rgba(99, 102, 241, 0.12)',
  cyan: 'rgba(34, 211, 238, 0.12)',
  green: 'rgba(52, 211, 153, 0.12)',
  orange: 'rgba(251, 146, 60, 0.12)',
  pink: 'rgba(244, 114, 182, 0.12)',
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="section skills">
      <div className="gradient-orb skills__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Tech Stack</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A deep technical toolkit honed over 9+ years of building
            enterprise-grade software solutions.
          </p>
        </motion.div>

        {/* Scrolling Tech Marquee */}
        <motion.div
          className="skills__marquee-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills__marquee">
            <div className="skills__marquee-track">
              {[...techLogos, ...techLogos].map((tech, i) => (
                <span key={i} className="skills__marquee-item mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          className="skills__grid"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((cat, ci) => (
            <motion.div key={ci} variants={cardVariant}>
              <TiltCard
                className={`skills__card glass skills__card--${cat.color}`}
                glareColor={glareColors[cat.color] || glareColors.accent}
                tiltAmount={12}
              >
                <h3 className="skills__card-title">{cat.title}</h3>
                <div className="skills__bars">
                  {cat.skills.map((skill, si) => (
                    <div key={si} className="skills__bar-group">
                      <div className="skills__bar-header">
                        <span className="skills__bar-name">{skill.name}</span>
                        <span className="skills__bar-pct mono">{skill.level}%</span>
                      </div>
                      <div className="skills__bar-track">
                        <motion.div
                          className={`skills__bar-fill skills__bar-fill--${cat.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: ci * 0.1 + si * 0.1, ease: [0.4, 0, 0.2, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
