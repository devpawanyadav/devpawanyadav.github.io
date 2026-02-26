import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    company: 'SingleInterface',
    role: 'Principal Software Engineer',
    period: 'May 2022 - Present',
    duration: '3+ years',
    location: 'Gurugram, India',
    color: 'accent',
    highlights: [
      'Spearheaded a no-code website builder reducing client onboarding from 2 months to 2 hours (99% improvement)',
      'Led AI-powered component generation cutting development time by 70%',
      'Established coding standards, review processes, and architectural guidelines',
      'Championed microservices adoption and performance optimization for millions of users',
    ],
    tech: ['PHP', 'JavaScript', 'AI/ML', 'System Architecture', 'Microservices', 'Google APIs'],
  },
  {
    company: 'SingleInterface',
    role: 'Senior Software Engineer',
    period: 'May 2019 - May 2022',
    duration: '3 years',
    location: 'Gurugram, India',
    color: 'cyan',
    highlights: [
      'Architected global event tracking infrastructure with Google Tag Manager & Analytics',
      'Built universal lead capture system with dynamic website integration',
      'Created drag-and-drop website builder for instant deployments',
      'Led monolithic to microservices migration for high-traffic environments',
    ],
    tech: ['PHP', 'JavaScript', 'Google APIs', 'GTM', 'Analytics', 'SaaS', 'System Design'],
  },
  {
    company: 'Alwaysinfotech Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: 'Jun 2018 - May 2019',
    duration: '1 year',
    location: 'Gurugram, India',
    color: 'green',
    highlights: [
      'Built stock market platform handling real-time data with millions of concurrent users',
      'Designed LLD/HLD for complex enterprise systems',
      'Deployed scalable apps on AWS (EC2, S3, RDS, CloudFront)',
      'Architected reusable authentication system and SDK packages',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'AWS', 'API Development', 'System Design'],
  },
  {
    company: 'Monet Analytics',
    role: 'Software Engineer',
    period: 'Oct 2017 - May 2018',
    duration: '8 months',
    location: 'Gurugram, India',
    color: 'orange',
    highlights: [
      'Built emotion detection platform analyzing viewer responses for Big Brother & Marvel Studios',
      'Integrated WebRTC for real-time video capture via browser',
      'Developed emotion classification algorithms for facial expression analysis',
      'Created data visualization modules for sentiment timelines',
    ],
    tech: ['WebRTC', 'JavaScript', 'Face Detection APIs', 'PHP', 'MySQL', 'Video Processing'],
  },
  {
    company: 'Grepix Infotech Pvt. Ltd.',
    role: 'Software Engineer / Associate Developer',
    period: 'Mar 2016 - Sep 2017',
    duration: '1.5 years',
    location: 'New Delhi, India',
    color: 'pink',
    highlights: [
      'Built RESTful and SOAP APIs for client applications',
      'Developed interactive admin panels and dashboards',
      'Progressed from Associate to Software Engineer',
      'Mastered PHP, CakePHP, MySQL, and full-stack development',
    ],
    tech: ['PHP', 'CakePHP', 'MySQL', 'JavaScript', 'jQuery', 'AJAX', 'REST APIs'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="section experience">
      <div className="gradient-orb experience__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Career Path</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A decade of progressive growth from associate developer to principal engineer,
            building systems that serve millions.
          </p>
        </motion.div>

        <motion.div
          className="experience__timeline"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="experience__timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`experience__item experience__item--${exp.color}`}
              variants={cardVariant}
            >
              <div className="experience__timeline-dot">
                <FiBriefcase />
              </div>

              <motion.div
                className="experience__card glass"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <h4 className="experience__company">{exp.company}</h4>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__meta-item">
                      <FiCalendar size={14} />
                      {exp.period}
                    </span>
                    <span className="experience__meta-item">
                      <FiMapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="experience__highlights">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="experience__highlight">
                      <FiChevronRight className="experience__highlight-icon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience__tech">
                  {exp.tech.map((t, ti) => (
                    <span key={ti} className="experience__tech-tag mono">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
