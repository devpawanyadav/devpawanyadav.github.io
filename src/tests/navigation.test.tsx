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

describe('Navigation and Theme Tests', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('keyboard shortcuts navigate to correct pages', async () => {
    renderWithProviders(<App />);
    
    // Test Home navigation
    fireEvent.keyDown(document, { key: 'h', altKey: true });
    expect(window.location.pathname).toBe('/');

    // Test Projects navigation
    fireEvent.keyDown(document, { key: 'p', altKey: true });
    expect(window.location.pathname).toBe('/projects');

    // Test About navigation
    fireEvent.keyDown(document, { key: 'a', altKey: true });
    expect(window.location.pathname).toBe('/about');

    // Test Contact navigation
    fireEvent.keyDown(document, { key: 'c', altKey: true });
    expect(window.location.pathname).toBe('/contact');
  });

  test('theme toggle works with keyboard shortcut', () => {
    renderWithProviders(<App />);
    
    // Check initial theme
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    
    // Toggle theme with keyboard shortcut
    fireEvent.keyDown(document, { key: 't', altKey: true });
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    // Toggle back
    fireEvent.keyDown(document, { key: 't', altKey: true });
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('tab navigation follows correct order', () => {
    renderWithProviders(<App />);
    const focusableElements = screen.getAllByRole('link');
    
    // Start from first element
    focusableElements[0].focus();
    
    // Tab through elements
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(focusableElements[1]);
    
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(focusableElements[2]);
    
    // Test shift+tab (backwards navigation)
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(focusableElements[1]);
  });

  test('theme preference is persisted', () => {
    renderWithProviders(<App />);
    const themeToggle = screen.getByLabelText('Toggle dark mode');
    
    // Toggle theme
    fireEvent.click(themeToggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    
    // Unmount and remount to test persistence
    const { unmount } = renderWithProviders(<App />);
    unmount();
    renderWithProviders(<App />);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('tooltips show correct keyboard shortcuts', () => {
    renderWithProviders(<App />);
    
    const homeLink = screen.getByText('Home').closest('div');
    const projectsLink = screen.getByText('Projects').closest('div');
    
    // Check home tooltip
    fireEvent.mouseEnter(homeLink as HTMLElement);
    expect(screen.getByText('Alt + H')).toBeInTheDocument();
    
    // Check projects tooltip
    fireEvent.mouseEnter(projectsLink as HTMLElement);
    expect(screen.getByText('Alt + P')).toBeInTheDocument();
  });
});