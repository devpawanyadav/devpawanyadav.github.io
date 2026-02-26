import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiHeart, FiCheckCircle } from 'react-icons/fi';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzebelp', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="gradient-orb contact__orb" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// Get In Touch</span>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Open to architect opportunities and interesting collaborations.
            Let's connect and discuss how I can contribute to your next big project.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="mailto:pawanyd2012@gmail.com"
              className="contact__card glass"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="contact__card-icon contact__card-icon--accent">
                <FiMail />
              </div>
              <div>
                <h4 className="contact__card-label">Email</h4>
                <p className="contact__card-value">pawanyd2012@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+917737507050"
              className="contact__card glass"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="contact__card-icon contact__card-icon--cyan">
                <FiPhone />
              </div>
              <div>
                <h4 className="contact__card-label">Phone</h4>
                <p className="contact__card-value">+91 7737507050</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/pawanyd"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="contact__card-icon contact__card-icon--green">
                <FiLinkedin />
              </div>
              <div>
                <h4 className="contact__card-label">LinkedIn</h4>
                <p className="contact__card-value">linkedin.com/in/pawanyd</p>
              </div>
            </motion.a>

            <motion.div
              className="contact__card glass"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="contact__card-icon contact__card-icon--orange">
                <FiMapPin />
              </div>
              <div>
                <h4 className="contact__card-label">Location</h4>
                <p className="contact__card-value">Gurugram, Haryana, India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="contact__form glass"
              onSubmit={handleSubmit}
            >
              <h3 className="contact__form-title">Send a Message</h3>
              <div className="contact__form-group">
                <label className="contact__form-label mono" htmlFor="name">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label mono" htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label mono" htmlFor="subject">subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="contact__form-input"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label mono" htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>
              {isSubmitted && (
                <motion.div 
                  className="contact__success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiCheckCircle className="contact__success-icon" />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                className="contact__form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="contact__spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo mono">
              <span className="highlight">&lt;</span>PK<span className="highlight"> /&gt;</span>
            </div>
            <p className="footer__text">
              Built with <FiHeart className="footer__heart" /> by Pawan Kumar
            </p>
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
