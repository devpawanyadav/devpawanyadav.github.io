import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiLayout, FiCpu, FiActivity, FiCheckSquare,
  FiGlobe, FiServer, FiSmile, FiBarChart2,
  FiExternalLink, FiChevronRight
} from 'react-icons/fi';
import TiltCard from './TiltCard';
import './Projects.css';

const projects = [
  {
    title: 'No-Code Website Builder',
    company: 'SingleInterface',
    icon: <FiLayout />,
    color: 'accent',
    tagline: 'Revolutionary drag-and-drop platform for enterprise clients',
    description:
      'Spearheaded a complete no-code website editor enabling non-technical users to design and launch websites within minutes. Architected a component-based system with layouts, templates, widgets, and design elements. Implemented real-time preview, responsive design, and seamless publishing workflows.',
    impact: [
      'Reduced client onboarding from 2 months to 2 hours',
      '99% efficiency improvement in deployment process',
      'Empowered clients with instant deployment at enterprise-grade quality',
    ],
    tech: ['PHP', 'JavaScript', 'Drag & Drop API', 'Component Architecture', 'SaaS', 'Real-time Preview'],
    featured: true,
  },
  {
    title: 'AI-Powered Component Generation',
    company: 'SingleInterface',
    icon: <FiCpu />,
    color: 'cyan',
    tagline: 'Intelligent automated website component design using AI',
    description:
      'Led AI integration for automated website component design. Developed AI models generating custom components that match brand guidelines and user preferences. Implemented an intelligent suggestion system recommending optimal layouts based on best practices and user behavior.',
    impact: [
      '70% reduction in component development time',
      'AI-designed components integrate directly into the editor',
      'Enhanced design quality and consistency across projects',
    ],
    tech: ['AI/ML', 'Python', 'JavaScript', 'Brand Matching', 'Layout Optimization', 'SaaS Integration'],
    featured: true,
  },
  {
    title: 'Global Event Tracking System',
    company: 'SingleInterface',
    icon: <FiActivity />,
    color: 'green',
    tagline: 'Comprehensive analytics infrastructure for enterprise brands',
    description:
      'Architected global event tracking infrastructure using Google Tag Manager for custom event capturing with real-time Google Analytics integration. Developed a universal lead capture system accepting multiple form types with dynamic website integration and seamless third-party CRM API connections.',
    impact: [
      'Real-time analytics for enterprise brands at global scale',
      'Universal lead capture across multiple form types',
      'Seamless CRM integration for automated workflows',
    ],
    tech: ['Google Tag Manager', 'Google Analytics', 'JavaScript', 'CRM APIs', 'Event Tracking', 'Lead Management'],
    featured: true,
  },
  {
    title: 'Custom Validation Module',
    company: 'SingleInterface',
    icon: <FiCheckSquare />,
    color: 'orange',
    tagline: 'No-code validation system for non-technical users',
    description:
      'Built a no-code validation system empowering non-technical users to configure complex validation rules without developer intervention. Enabled business teams to define custom form validations, data integrity checks, and workflow rules through an intuitive interface.',
    impact: [
      'Zero developer dependency for validation rule changes',
      'Non-technical teams can configure complex rules independently',
      'Significantly reduced support tickets and turnaround time',
    ],
    tech: ['PHP', 'JavaScript', 'Rule Engine', 'No-Code Builder', 'Form Validation', 'Dynamic Configuration'],
  },
  {
    title: 'Microservices Architecture Migration',
    company: 'SingleInterface',
    icon: <FiServer />,
    color: 'pink',
    tagline: 'Monolith to microservices transformation at scale',
    description:
      'Led the critical migration from a monolithic architecture to microservices, improving scalability, maintainability, and performance for high-traffic environments serving millions of users. Established coding standards, review processes, and architectural guidelines for the new system.',
    impact: [
      'Scaled platform to handle millions of concurrent users',
      'Improved deployment speed and service independence',
      'Established architectural guidelines adopted across teams',
    ],
    tech: ['Microservices', 'System Design', 'PHP', 'Docker', 'AWS', 'Performance Optimization'],
  },
  {
    title: 'Emotion Detection Platform',
    company: 'Monet Analytics',
    icon: <FiSmile />,
    color: 'cyan',
    tagline: 'Real-time facial emotion analysis for film studios',
    description:
      'Built an innovative emotion detection platform analyzing viewer responses to entertainment content for major production houses including Big Brother and Marvel Studios. Captured real-time facial expressions via WebRTC, processed frame-by-frame with emotion classification, and generated sentiment timelines.',
    impact: [
      'Delivered insights for Big Brother & Marvel Studios',
      'Real-time emotion mapping synced to trailer scenes',
      'Data-driven decisions for trailer editing & marketing',
    ],
    tech: ['WebRTC', 'Face Detection APIs', 'JavaScript', 'Video Processing', 'PHP', 'Data Visualization'],
  },
  {
    title: 'Stock Market Trading Platform',
    company: 'Alwaysinfotech',
    icon: <FiBarChart2 />,
    color: 'green',
    tagline: 'Real-time trading platform handling millions of users',
    description:
      'Contributed to a high-impact stock market platform handling real-time data processing and trading operations. Designed LLD/HLD for complex systems ensuring scalability. Implemented caching strategies and database optimization for minimal latency under high-load conditions.',
    impact: [
      'Handled millions of concurrent users in real-time',
      'Sub-second latency for trading operations',
      'Deployed on AWS with auto-scaling for peak loads',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'AWS', 'Redis', 'System Design', 'Real-time Processing'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const glareColors = {
  accent: 'rgba(99, 102, 241, 0.15)',
  cyan: 'rgba(34, 211, 238, 0.15)',
  green: 'rgba(52, 211, 153, 0.15)',
  orange: 'rgba(251, 146, 60, 0.15)',
  pink: 'rgba(244, 114, 182, 0.15)',
};

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [expandedIdx, setExpandedIdx] = useState(null);

  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="gradient-orb projects__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Featured Work</span>
          <h2 className="section-title">Projects & Impact</h2>
          <p className="section-subtitle">
            Key projects that delivered transformative business value,
            from no-code builders to AI-powered automation.
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <motion.div
          className="projects__featured"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {featured.map((project, i) => (
            <motion.div key={i} variants={cardVariant}>
              <TiltCard
                className={`projects__featured-card glass projects__featured-card--${project.color}`}
                glareColor={glareColors[project.color] || glareColors.accent}
                tiltAmount={10}
                scale={1.03}
              >
                <div className="projects__featured-header">
                  <div className={`projects__featured-icon projects__featured-icon--${project.color}`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="projects__featured-title">{project.title}</h3>
                    <span className="projects__featured-company mono">{project.company}</span>
                  </div>
                </div>

                <p className="projects__featured-tagline">{project.tagline}</p>
                <p className="projects__featured-desc">{project.description}</p>

                <div className="projects__featured-impact">
                  <h4 className="projects__featured-impact-title">Key Impact</h4>
                  <ul className="projects__featured-impact-list">
                    {project.impact.map((item, ii) => (
                      <li key={ii}>
                        <FiChevronRight className={`projects__impact-icon projects__impact-icon--${project.color}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="projects__featured-tech">
                  {project.tech.map((t, ti) => (
                    <span key={ti} className="projects__tech-tag mono">{t}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects - Compact Grid */}
        <motion.div
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {others.map((project, i) => (
            <motion.div key={i} variants={cardVariant}>
              <TiltCard
                className={`projects__card glass projects__card--${project.color}`}
                glareColor={glareColors[project.color] || glareColors.accent}
                tiltAmount={14}
                scale={1.04}
              >
                <div className="projects__card-inner" onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}>
                  <div className="projects__card-header">
                    <div className={`projects__card-icon projects__card-icon--${project.color}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="projects__card-title">{project.title}</h3>
                      <span className="projects__card-company mono">{project.company}</span>
                    </div>
                  </div>

                  <p className="projects__card-tagline">{project.tagline}</p>

                  <AnimatePresence>
                    {expandedIdx === i && (
                      <motion.div
                        className="projects__card-expanded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="projects__card-desc">{project.description}</p>
                        <ul className="projects__card-impact">
                          {project.impact.map((item, ii) => (
                            <li key={ii}>
                              <FiChevronRight className={`projects__impact-icon projects__impact-icon--${project.color}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="projects__card-tech">
                    {project.tech.slice(0, 4).map((t, ti) => (
                      <span key={ti} className="projects__tech-tag mono">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="projects__tech-tag projects__tech-tag--more mono">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <span className="projects__card-expand mono">
                    {expandedIdx === i ? '- collapse' : '+ details'}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
