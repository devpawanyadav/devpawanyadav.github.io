import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import { LoadingProvider } from '../context/LoadingContext';
import { KeyboardNavProvider } from '../context/KeyboardNavContext';
import App from '../App';

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <LoadingProvider>
          <KeyboardNavProvider>
            {component}
          </KeyboardNavProvider>
        </LoadingProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Accessibility Tests', () => {
  test('skip link becomes visible on focus', () => {
    renderWithProviders(<App />);
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).not.toBeVisible();
    skipLink.focus();
    expect(skipLink).toBeVisible();
  });

  test('keyboard navigation shortcuts work', () => {
    renderWithProviders(<App />);
    const navigateSpy = jest.spyOn(window.history, 'pushState');

    // Simulate Alt + H for home
    fireEvent.keyDown(document, { key: 'h', altKey: true });
    expect(navigateSpy).toHaveBeenCalledWith(expect.anything(), '', '/');

    // Simulate Alt + P for projects
    fireEvent.keyDown(document, { key: 'p', altKey: true });
    expect(navigateSpy).toHaveBeenCalledWith(expect.anything(), '', '/projects');
  });

  test('main content is focusable and has proper ARIA role', () => {
    renderWithProviders(<App />);
    const mainContent = screen.getByRole('main');
    expect(mainContent).toHaveAttribute('tabindex', '-1');
    expect(mainContent).toHaveAttribute('id', 'main-content');
  });

  test('theme toggle is accessible via keyboard', () => {
    renderWithProviders(<App />);
    const themeToggle = screen.getByLabelText('Toggle dark mode');
    expect(themeToggle).toBeInTheDocument();
    
    themeToggle.focus();
    fireEvent.keyDown(themeToggle, { key: 'Enter' });
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('navigation menu items have proper focus indicators', () => {
    renderWithProviders(<App />);
    const navLinks = screen.getAllByRole('link');
    
    navLinks.forEach(link => {
      link.focus();
      const styles = window.getComputedStyle(link);
      expect(styles.outline).not.toBe('none');
    });
  });

  test('form inputs have proper aria-labels', () => {
    renderWithProviders(<App />);
    const inputs = screen.getAllByRole('textbox');
    
    inputs.forEach(input => {
      expect(input).toHaveAttribute('aria-label');
    });
  });
});