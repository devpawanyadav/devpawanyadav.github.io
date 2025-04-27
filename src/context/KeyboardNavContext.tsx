import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

interface KeyboardNavContextType {
  focusedElement: string;
  setFocusedElement: (id: string) => void;
}

const KeyboardNavContext = createContext<KeyboardNavContextType | undefined>(undefined);

export const KeyboardNavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [focusedElement, setFocusedElement] = useState('');
  const navigate = useNavigate();
  const { toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle navigation shortcuts
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            navigate('/');
            break;
          case 'a':
            navigate('/about');
            break;
          case 'p':
            navigate('/projects');
            break;
          case 'c':
            navigate('/contact');
            break;
          case 't':
            toggleDarkMode();
            break;
          default:
            break;
        }
      }

      // Handle focus navigation with arrow keys when in navigation mode
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements);
        const currentIndex = focusableArray.findIndex(el => el === document.activeElement);
        
        if (currentIndex > -1) {
          const nextElement = focusableArray[currentIndex + (e.shiftKey ? -1 : 1)];
          if (nextElement) {
            (nextElement as HTMLElement).focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, toggleDarkMode]);

  return (
    <KeyboardNavContext.Provider value={{ focusedElement, setFocusedElement }}>
      {children}
    </KeyboardNavContext.Provider>
  );
};

export const useKeyboardNav = () => {
  const context = useContext(KeyboardNavContext);
  if (!context) {
    throw new Error('useKeyboardNav must be used within a KeyboardNavProvider');
  }
  return context;
};