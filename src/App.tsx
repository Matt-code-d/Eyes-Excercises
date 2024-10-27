import EyeExercise from './components/EyeExercise';
import Footer from './components/Footer'; // Assicurati di importare il footer
import { useTheme } from './ThemeContext'; // Importa il contesto del tema
import { FaMoon, FaSun } from 'react-icons/fa'; // Icone per i pulsanti

function App() {
  const { isDarkMode, setIsDarkMode } = useTheme(); // Usa il contesto del tema

  return (
    <div className={`p-5 ${isDarkMode ? 'has-background-dark' : 'has-background-light'}`}>
      {/* Pulsante per cambiare il tema */}
      <button
        className="button is-medium mb-4"
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />} {isDarkMode ? '' : ''}
      </button>
      <EyeExercise />
      <Footer /> {/* Aggiungi il Footer */}
    </div>
  );
}

export default App;
