import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LoadingProvider } from './context/LoadingContext';
import { KeyboardNavProvider } from './context/KeyboardNavContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FocusManager from './components/FocusManager';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <Projects />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Router>
          <KeyboardNavProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text flex flex-col transition-colors duration-200">
              {/* Skip to content link - only visible when focused */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white 
                         focus:dark:bg-dark-card focus:text-primary focus:dark:text-accent focus:outline-none 
                         focus:ring-2 focus:ring-primary focus:dark:ring-accent"
              >
                Skip to main content
              </a>
              
              <Navbar />
              <main id="main-content" className="flex-grow" role="main">
                <AnimatedRoutes />
              </main>
              <Footer />
              <ScrollToTop />
              <FocusManager />
            </div>
          </KeyboardNavProvider>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
