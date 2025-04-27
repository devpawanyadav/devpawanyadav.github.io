import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLoading } from '../context/LoadingContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { setLoading } = useLoading();

  const validateForm = () => {
    const errors: FormErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    let isValid = true;

    if (formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters long';
      isValid = false;
    }

    if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
    
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-gray-900">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Get in Touch
                </span>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-12 animate-pulse" />
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
            >
              Let's collaborate and bring your ideas to life
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-1 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-dark-text">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <svg className="w-6 h-6 text-primary dark:text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</h4>
                        <a href="mailto:contact@pawanyadav.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors">
                          contact@pawanyadav.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <svg className="w-6 h-6 text-primary dark:text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Location</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Remote - Worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <svg className="w-6 h-6 text-primary dark:text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Availability</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Mon - Fri, 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-dark-text">
                    Connect With Me
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href="https://github.com/pawanyd" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary dark:group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/pawanyd" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary dark:group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                    <a 
                      href="https://twitter.com/pawanyd" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-primary dark:group-hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card p-8 rounded-lg shadow-lg transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.name 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                          focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent
                          disabled:opacity-75 disabled:cursor-not-allowed
                          transition-colors`}
                        disabled={isSubmitting}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          formErrors.email 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                          focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent
                          disabled:opacity-75 disabled:cursor-not-allowed
                          transition-colors`}
                        disabled={isSubmitting}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.subject 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent
                        disabled:opacity-75 disabled:cursor-not-allowed
                        transition-colors`}
                      disabled={isSubmitting}
                    />
                    {formErrors.subject && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.subject}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formErrors.message 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text
                        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent
                        disabled:opacity-75 disabled:cursor-not-allowed
                        transition-colors`}
                      disabled={isSubmitting}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">{formErrors.message}</p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg"
                    >
                      Thank you for your message! I'll get back to you as soon as possible.
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
                    className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform
                      ${isSubmitting 
                        ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                        : 'bg-primary hover:bg-secondary dark:bg-accent dark:hover:bg-primary hover:scale-[1.02]'
                      } text-white shadow-lg hover:shadow-xl`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;