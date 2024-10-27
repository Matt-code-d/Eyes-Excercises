import React from "react";
import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from '../ThemeContext'; // Importa il contesto del tema

const Footer = () => {
  const { isDarkMode } = useTheme(); // Usa il contesto del tema

  return (
    <footer
      className={`footer mt-5 py-4 ${isDarkMode ? 'footer-background-dark has-text-white' : 'footer-background-light has-text-dark'}`}
      style={{
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
        borderRadius: "10px", // Angoli arrotondati
        position: "relative",
        overflow: "hidden", // Per mantenere gli angoli arrotondati correttamente
      }}
    >
      <div className="content has-text-centered">
        <p className="mb-2" style={{ fontSize: "1.1rem", fontFamily: "'Poppins', sans-serif" }}>
          Made with <FaHeart className="has-text-danger" /> by{" "}
          <a
            href="https://matteosantoro.dev"
            target="_blank"
            className={`has-text-weight-bold ${isDarkMode ? 'has-text-white' : 'has-text-dark'}`}
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.color = "#00d1b2")}
            onMouseLeave={(e) => (e.target.style.color = isDarkMode ? "white" : "black")}
          >
            matteosantoro.dev
          </a>
        </p>
        <div className="social-icons mb-2">
          <a
            href="https://github.com/matteosantoro" // Inserisci il tuo link GitHub
            target="_blank"
            rel="noopener noreferrer"
            className={`button mx-1 ${isDarkMode ? 'is-light' : 'is-dark'}`}
            style={{ transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/matteosantoro/" // Inserisci il tuo link LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className={`button mx-1 ${isDarkMode ? 'is-light' : 'is-dark'}`}
            style={{ transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className={`has-text-grey-light ${isDarkMode ? 'has-text-light' : 'has-text-dark'}`} style={{ fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} matteosantoro.dev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
