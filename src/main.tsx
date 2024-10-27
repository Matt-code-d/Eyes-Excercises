import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.css';
import './index.css';
import { ThemeProvider } from './ThemeContext';
import logo from './assets/react.svg'; // Import the logo

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* Centered Logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src={logo} alt="React Logo" style={{ width: '100px', height: '100px' }} />
      </div>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
