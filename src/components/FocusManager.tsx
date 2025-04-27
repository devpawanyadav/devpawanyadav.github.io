import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FocusManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Focus the main content area when route changes
    const mainContent = document.querySelector('main');
    if (mainContent) {
      // Add tabIndex to make it focusable
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      // Remove outline to maintain visual cleanliness
      mainContent.style.outline = 'none';
    }

    // Announce page change to screen readers
    const pageTitle = document.querySelector('h1');
    if (pageTitle) {
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = `Navigated to ${pageTitle.textContent}`;
      document.body.appendChild(announcement);

      // Clean up after announcement
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [location]);

  return null;
};

export default FocusManager;