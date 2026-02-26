import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import TiltCard from './TiltCard';
import './Education.css';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Science',
    institution: 'University of Kota',
    period: 'July 2013 - March 2016',
    icon: <FiAward />,
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Information Technology',
    institution: 'University of Rajasthan',
    period: 'July 2010 - July 2013',
    icon: <FiBookOpen />,
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="gradient-orb education__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            A strong academic foundation in computer science and information technology.
          </p>
        </motion.div>

        <div className="education__grid">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <TiltCard
                className="education__card glass"
                tiltAmount={12}
                scale={1.04}
                glareColor={i === 0 ? 'rgba(99, 102, 241, 0.12)' : 'rgba(34, 211, 238, 0.12)'}
              >
                <div className="education__card-icon">
                  {edu.icon}
                </div>
                <div className="education__card-content">
                  <h3 className="education__degree">{edu.degree}</h3>
                  <p className="education__field">{edu.field}</p>
                  <p className="education__institution">{edu.institution}</p>
                  <span className="education__period mono">{edu.period}</span>
                </div>
                <div className="education__card-glow" />
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          className="education__languages"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="education__languages-title">Languages</h3>
          <div className="education__languages-grid">
            <div className="education__language glass">
              <span className="education__language-name">Hindi</span>
              <span className="education__language-level">Full Professional</span>
              <div className="education__language-bar">
                <motion.div
                  className="education__language-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
            <div className="education__language glass">
              <span className="education__language-name">English</span>
              <span className="education__language-level">Professional Working</span>
              <div className="education__language-bar">
                <motion.div
                  className="education__language-fill education__language-fill--cyan"
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
