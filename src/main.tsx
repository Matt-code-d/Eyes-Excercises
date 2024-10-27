import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.css';
import './index.css';
import { ThemeProvider } from './ThemeContext';
import Logo from './components/Logo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* Wrapper for centered logo and App */}
      <div style={{ textAlign: 'center' }}>
        {/* Centered Logo */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
        <Logo />
      </div>
        <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
