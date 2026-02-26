import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiServer, FiCloud, FiCpu, FiUsers, FiTrendingUp } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: <FiServer />, label: 'Backend Architecture', desc: 'Microservices & system design at scale' },
  { icon: <FiCode />, label: 'Full-Stack Dev', desc: 'PHP, Python, Node.js, JavaScript' },
  { icon: <FiCloud />, label: 'Cloud & DevOps', desc: 'AWS EC2, S3, RDS, CloudFront' },
  { icon: <FiCpu />, label: 'AI Integration', desc: 'ML-powered automation & tooling' },
  { icon: <FiUsers />, label: 'Team Leadership', desc: 'Mentoring, code reviews, architecture' },
  { icon: <FiTrendingUp />, label: 'Performance', desc: 'High-traffic optimization for M+ users' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section about">
      <div className="gradient-orb about__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Crafting Software That Scales</h2>
          <p className="section-subtitle">
            From startup garages to enterprise platforms, I architect solutions
            that power millions of users worldwide.
          </p>
        </motion.div>

        <div className="about__grid" ref={ref}>
          <motion.div
            className="about__story"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__story-card glass">
              <h3 className="about__story-title">My Journey</h3>
              <p>
                I began my career in <span className="highlight">2016</span> as an Associate Developer at Grepix Infotech,
                where I built my foundation in PHP and RESTful APIs. Since then, I've progressed through increasingly
                impactful roles - from building <span className="highlight-cyan">emotion detection platforms</span> using
                WebRTC and AI at Monet Network, to architecting <span className="highlight-green">enterprise-scale stock
                market platforms</span> at Always Infotech.
              </p>
              <p>
                Today at <span className="highlight">SingleInterface</span>, I serve as Principal Software Engineer,
                leading technical strategy for next-generation SaaS solutions. I spearheaded a revolutionary
                <span className="highlight-cyan"> no-code website builder</span> that reduced client onboarding from
                2 months to just 2 hours - a <span className="highlight-green">99% efficiency improvement</span>.
              </p>
              <p>
                I'm driven by a philosophy of combining technical excellence with business value,
                focusing on scalability, innovation, and exceptional user experiences.
              </p>

              <div className="about__terminal">
                <div className="about__terminal-header">
                  <span className="about__terminal-dot" />
                  <span className="about__terminal-title mono">~/pawan</span>
                </div>
                <div className="about__terminal-body mono">
                  <div><span className="code-keyword">$</span> cat philosophy.txt</div>
                  <div className="about__terminal-output">
                    "I create solutions that combine technical<br />
                    excellence with business value, pushing<br />
                    technological boundaries to deliver<br />
                    measurable impact."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__highlights"
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {highlights.map((h, i) => (
              <motion.div key={i} className="about__highlight-card glass" variants={item}>
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <h4 className="about__highlight-label">{h.label}</h4>
                  <p className="about__highlight-desc">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
