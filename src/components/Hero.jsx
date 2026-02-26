import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiChevronDown } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg-grid" />

      <div className="gradient-orb hero__orb-1" />
      <div className="gradient-orb hero__orb-2" />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__badge-dot" />
            <span>Available for Architect Opportunities</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I'm{' '}
            <span className="hero__name">Pawan Kumar</span>
          </motion.h1>

          <motion.div
            className="hero__typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="hero__typing-prefix mono">&gt; </span>
            <TypeAnimation
              sequence={[
                'Principal Software Engineer',
                2000,
                'Backend Architect',
                2000,
                'System Design Expert',
                2000,
                'Microservices Specialist',
                2000,
                'SaaS Platform Builder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__typing-text"
            />
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            9+ years building enterprise-grade SaaS platforms, architecting microservices
            at scale, and leading teams to deliver products used by millions.
            Passionate about turning complex business challenges into elegant technical solutions.
          </motion.p>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-number">9+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">99%</span>
              <span className="hero__stat-label">Efficiency Gains</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">M+</span>
              <span className="hero__stat-label">Users Served</span>
            </div>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a href="#contact" className="hero__btn hero__btn--primary" data-magnetic>
              <FiMail />
              Get In Touch
            </a>
            <a href="#experience" className="hero__btn hero__btn--secondary" data-magnetic>
              <FiDownload />
              View My Work
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/pawanyd" target="_blank" rel="noopener noreferrer" className="hero__social-link" data-magnetic aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:pawanyd2012@gmail.com" className="hero__social-link" data-magnetic aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__code-window">
            <div className="hero__code-header">
              <div className="hero__code-dots">
                <span className="hero__code-dot hero__code-dot--red" />
                <span className="hero__code-dot hero__code-dot--yellow" />
                <span className="hero__code-dot hero__code-dot--green" />
              </div>
              <span className="hero__code-title mono">pawan.config.js</span>
            </div>
            <div className="hero__code-body mono">
              <div className="hero__code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span>{' '}
                <span className="code-operator">=</span>{' '}
                <span className="code-bracket">{'{'}</span>
              </div>
              <div className="hero__code-line hero__code-line--indent">
                <span className="code-property">name</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"Pawan Kumar"</span>
                <span className="code-comma">,</span>
              </div>
              <div className="hero__code-line hero__code-line--indent">
                <span className="code-property">role</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"Principal Software Engineer"</span>
                <span className="code-comma">,</span>
              </div>
              <div className="hero__code-line hero__code-line--indent">
                <span className="code-property">experience</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"9+ years"</span>
                <span className="code-comma">,</span>
              </div>
              <div className="hero__code-line hero__code-line--indent">
                <span className="code-property">passion</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"Building at Scale"</span>
                <span className="code-comma">,</span>
              </div>
              <div className="hero__code-line hero__code-line--indent">
                <span className="code-property">status</span>
                <span className="code-operator">:</span>{' '}
                <span className="code-string">"Seeking Architect Roles"</span>
              </div>
              <div className="hero__code-line">
                <span className="code-bracket">{'}'}</span>
                <span className="code-operator">;</span>
              </div>
              <div className="hero__code-line hero__code-line--empty" />
              <div className="hero__code-line">
                <span className="code-keyword">export default</span>{' '}
                <span className="code-variable">developer</span>
                <span className="code-operator">;</span>
                <span className="hero__cursor">|</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiChevronDown size={24} />
      </motion.a>
    </section>
  );
}
