import React from 'react';
import EyeExercise from './components/EyeExercise';
import Footer from './components/Footer';
import ThemeToggleButton from './components/ThemeToggleButton'; // Import the new component
import { useTheme } from './ThemeContext';

const App: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`p-5 ${isDarkMode ? 'has-background-dark' : 'has-background-light'}`}>
      <ThemeToggleButton /> {/* Use the new button component */}
      <EyeExercise />
      <Footer />
    </div>
  );
};

export default App;
