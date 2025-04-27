import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardNav } from '../context/KeyboardNavContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  if (!mounted) return null;

  const navLinks = [
    { to: '/', label: 'Home', shortcut: 'Alt + H' },
    { to: '/about', label: 'About', shortcut: 'Alt + A' },
    { to: '/projects', label: 'Projects', shortcut: 'Alt + P' },
    { to: '/contact', label: 'Contact', shortcut: 'Alt + C' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-dark-card/80 backdrop-blur-lg shadow-lg' 
          : 'bg-white dark:bg-dark-card shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary 
                     dark:from-accent dark:to-primary transition-colors relative group"
          >
            <span>Pawan Yadav</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary 
                         dark:from-accent dark:to-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label, shortcut }) => (
              <div key={to} className="relative group">
                <Link
                  to={to}
                  className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary 
                          transition-colors relative ${location.pathname === to ? 'text-primary dark:text-accent' : ''}`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-accent transition-all 
                                duration-300 group-hover:w-full ${location.pathname === to ? 'w-full' : ''}`} />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 py-1 px-2 bg-gray-800 dark:bg-gray-700 
                             text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200
                             pointer-events-none whitespace-nowrap z-50">
                  {shortcut}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent 
                               border-b-gray-800 dark:border-b-gray-700"></div>
                </div>
              </div>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative group"
              aria-label="Toggle dark mode"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 py-1 px-2 bg-gray-800 dark:bg-gray-700 
                           text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200
                           pointer-events-none whitespace-nowrap z-50">
                Toggle theme (Alt + T)
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent 
                             border-b-gray-800 dark:border-b-gray-700"></div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 
                      focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors
                            ${location.pathname === to 
                              ? 'bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;