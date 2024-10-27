import React from 'react';
import EyeExercise from './components/EyeExercise';
import Footer from './components/Footer'; // Cambia Footert.tsx in Footer.tsx per mantenere la coerenza
import { useTheme } from './ThemeContext'; // Importa il contesto del tema
import { FaMoon, FaSun } from 'react-icons/fa'; // Icone per i pulsanti

const App: React.FC = () => { // Specifica il tipo del componente
  const { isDarkMode, setIsDarkMode } = useTheme(); // Usa il contesto del tema

  return (
    <div className={`p-5 ${isDarkMode ? 'has-background-dark' : 'has-background-light'}`}>
      {/* Pulsante per cambiare il tema */}
      <button
        className="button is-medium mb-4"
        onClick={() => setIsDarkMode((prev) => !prev)}
        aria-label="Cambia tema" // Aggiungi aria-label per accessibilità
      >
        {isDarkMode ? <FaSun /> : <FaMoon />} {isDarkMode ? 'Chiaro' : 'Scuro'}
      </button>
      <EyeExercise />
      <Footer /> {/* Aggiungi il Footer */}
    </div>
  );
}

export default App;
