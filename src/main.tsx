import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.css'; // Importa Bulma qui
import './index.css'; // Il tuo file CSS principale
import { ThemeProvider } from './ThemeContext'; // Importa il contesto del tema

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
