import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import { FaEye, FaRedo } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const EyeExercise: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [position, setPosition] = useState(50);
  const [isMoving, setIsMoving] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [exerciseType, setExerciseType] = useState("convergenza");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const startExercise = () => {
    resetExercise();
    setIsMoving(true);
    let id: NodeJS.Timeout;
    const updateInterval = 50;

    switch (exerciseType) {
      case "convergenza":
        id = setInterval(() => {
          setPosition((prev) => {
            if (prev <= 10) {
              clearInterval(id);
              setIsMoving(false);
              setCycle((c) => c + 1);
              return 100;
            }
            return prev - 1;
          });
        }, updateInterval);
        break;

      case "divergenza":
        id = setInterval(() => {
          setPosition((prev) => {
            if (prev >= 100) {
              clearInterval(id);
              setIsMoving(false);
              setCycle((c) => c + 1);
              return 0;
            }
            return prev + 1;
          });
        }, updateInterval);
        break;

      case "saccadico":
        let targetPositions = [30, 70];
        let index = 0;
        id = setInterval(() => {
          setPosition(targetPositions[index]);
          index = (index + 1) % targetPositions.length;
        }, updateInterval * 4);
        break;

      case "seguimento":
        let followDirection = 1;
        id = setInterval(() => {
          setPosition((prev) => {
            if (prev >= 100) followDirection = -1;
            else if (prev <= 0) followDirection = 1;
            return prev + followDirection;
          });
        }, updateInterval);
        break;

      default:
        break;
    }

    setIntervalId(id);
  };

  const resetExercise = () => {
    setIsMoving(false);
    setCycle(0);
    setPosition(50);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <div className={`container is-fluid ${isDarkMode ? "has-background-dark" : "has-background-light"}`}>
      {isPortrait ? (
        <div className="notification is-warning has-text-centered">
          <p>Ruota il telefono in orizzontale per un'esperienza ottimale negli esercizi oculari.</p>
        </div>
      ) : (
        <div className="flex flex-column is-align-items-center is-justify-content-center py-5">
          <div className="mb-6 has-text-centered">
            <h2 className={`title is-4 ${isDarkMode ? "has-text-light" : "has-text-dark"}`}>
              <FaEye className="mr-2" />
              Esercizi Oculari
            </h2>
            <p className={`subtitle is-6 ${isDarkMode ? "has-text-light" : "has-text-grey-dark"}`}>
              Cicli completati: {cycle}
            </p>
          </div>

          <div
            className="relative box"
            style={{
              height: "200px",
              width: "100%",
              position: "relative",
              overflow: "hidden",
              border: `2px solid ${isDarkMode ? "#00d1b2" : "#00d1b2"}`,
              borderRadius: "10px",
              backgroundColor: isDarkMode ? "#333" : "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              className="circle"
              style={{
                position: "absolute",
                left: `${position}%`,
                top: "50%",
                transform: "translateY(-50%)",
                width: "30px",
                height: "30px",
                backgroundColor: isDarkMode ? "#ff3860" : "#ff3860",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            ></div>
          </div>

          {/* Responsive Columns for Dropdown and Buttons */}
          <div className="columns is-centered mt-2">
            <div className="column is-one-third">
              <div className="select is-fullwidth is-medium">
                <select
                  onChange={(e) => setExerciseType(e.target.value)}
                  value={exerciseType}
                >
                  <option value="convergenza">Esercizio di Convergenza</option>
                  <option value="divergenza">Esercizio di Divergenza</option>
                  <option value="saccadico">Movimento Saccadico</option>
                  <option value="seguimento">Esercizio di Seguimento</option>
                </select>
              </div>
            </div>
            <div className="column is-one-third has-text-centered">
              <button
                className={`button is-danger is-medium is-fullwidth mx-1`}
                style={{ backgroundColor: isDarkMode ? "#ff3860" : "#ff3860", color: isDarkMode ? "black" : "white" }}
                onClick={startExercise}
                disabled={isMoving}
              >
                {isMoving ? "In movimento..." : "Inizia Esercizio"}
              </button>
            </div>
            <div className="column is-one-third has-text-centered">
              <button
                className={`button is-primary is-medium is-fullwidth mx-1`}
                style={{ backgroundColor: isDarkMode ? "#00d1b2" : "#00d1b2", color: isDarkMode ? "black" : "white" }}
                onClick={resetExercise}
                disabled={!isMoving}
              >
                <FaRedo className="mr-1" />
                Ripristina
              </button>
            </div>
          </div>

          <div className={`content has-text-centered mt-4 ${isDarkMode ? "has-text-light" : "has-text-dark"}`}>
            <p className="mb-2 has-text-weight-semibold has-text-left">Istruzioni:</p>
            <ol className="has-text-left">
              <li>Siediti comodamente a circa 40 cm dallo schermo</li>
              <li>Seleziona un esercizio dal menu a discesa</li>
              <li>Clicca "Inizia Esercizio" per far muovere il punto</li>
              <li>Segui il punto con entrambi gli occhi mentre si muove</li>
              <li>Ripeti l'esercizio per 5-10 cicli</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default EyeExercise;
