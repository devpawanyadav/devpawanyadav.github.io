const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-card shadow-lg mt-16 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pawan Yadav. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/pawanyd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pawanyd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@pawanyadav.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;