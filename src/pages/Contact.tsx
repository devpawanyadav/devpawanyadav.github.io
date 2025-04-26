import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset submit status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-dark-text">Get in Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-dark-text">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@pawanyadav.com
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Remote
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-dark-text">Social Links</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com/pawanyd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/pawanyd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg transition-colors">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                          bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                          focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                          disabled:opacity-75 disabled:cursor-not-allowed
                          transition-colors"
                required
                minLength={2}
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                          bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                          focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                          disabled:opacity-75 disabled:cursor-not-allowed
                          transition-colors"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                          bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                          focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
                          disabled:opacity-75 disabled:cursor-not-allowed
                          transition-colors"
                required
                minLength={10}
                disabled={isSubmitting}
              />
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg"
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary text-white py-2 px-4 rounded-lg transition-colors
                ${isSubmitting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:bg-secondary dark:hover:bg-accent'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;