import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <button
      className="button is-medium"
      onClick={() => setIsDarkMode((prev) => !prev)}
      aria-label="Cambia tema"
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
      }}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggleButton;
