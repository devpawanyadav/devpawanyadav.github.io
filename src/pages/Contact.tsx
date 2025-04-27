import React from 'react';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  return (
    <PageTransition>
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Get In Touch
            </h2>
          </div>

          <form className="space-y-6">
            <div className="animate-slideUp animate-delay-100">
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-secondary border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="animate-slideUp animate-delay-200">
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-secondary border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="animate-slideUp animate-delay-300">
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded-lg bg-secondary border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="animate-slideUp animate-delay-400">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center animate-slideUp animate-delay-500">
            <p className="text-lg">
              Or reach out directly at:{' '}
              <a
                href="mailto:contact@example.com"
                className="text-primary hover:text-primary-dark transition duration-300"
              >
                contact@example.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;