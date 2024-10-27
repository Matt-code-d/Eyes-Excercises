import React, { useState, useEffect } from "react"; 
import "bulma/css/bulma.css";
import { FaEye, FaRedo } from "react-icons/fa";
import { useTheme } from '../ThemeContext'; 

const EyeExercise: React.FC = () => {
  const { isDarkMode } = useTheme(); 
  const [position, setPosition] = useState(100);
  const [isMoving, setIsMoving] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [exerciseType, setExerciseType] = useState("convergenza");

  useEffect(() => {
    if (isMoving) {
      resetExercise();
    }
  }, [exerciseType]);

  const startExercise = () => {
    setIsMoving(true);
    let id: ReturnType<typeof setInterval>; 
    const updateInterval = 50; 

    if (exerciseType === "convergenza") {
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
    } else if (exerciseType === "laterale") {
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
    } else if (exerciseType === "circolare") {
      let angle = 0; 
      const radius = 40; 
      // Removed the centerY declaration since it's unused
      const centerX = 50; 
      id = setInterval(() => {
        angle += 10; 
        const newX = centerX + radius * Math.cos((angle * Math.PI) / 180);
        // const newY = centerY + radius * Math.sin((angle * Math.PI) / 180); // Removed this line as well

        setPosition(newX);
        if (angle >= 360) {
          clearInterval(id);
          setIsMoving(false);
          setCycle((c) => c + 1);
        }
      }, updateInterval);
    } else if (exerciseType === "focalizzazione") {
      id = setInterval(() => {
        setPosition((prev) => {
          if (prev >= 100) {
            clearInterval(id);
            setIsMoving(false);
            setCycle((c) => c + 1);
            return 10; 
          }
          return prev + 1; 
        });
      }, updateInterval);
    } else if (exerciseType === "allontanamento") {
      id = setInterval(() => {
        setPosition((prev) => {
          if (prev >= 100) {
            clearInterval(id);
            setIsMoving(false);
            setCycle((c) => c + 1);
            return 10; 
          }
          return prev + 1; 
        });
      }, updateInterval);
    }

    return () => clearInterval(id); 
  };

  const resetExercise = () => {
    setIsMoving(false);
    setCycle(0);
    setPosition(100); 
  };

  return (
    <div className={`container is-fluid ${isDarkMode ? 'has-background-dark' : 'has-background-light'}`}>
      <div className="flex flex-column is-align-items-center is-justify-content-center py-5">
        <div className="mb-6 has-text-centered">
          <h2 className={`title is-4 ${isDarkMode ? 'has-text-light' : 'has-text-dark'}`}>
            <FaEye className="mr-2" />
            Esercizi Oculari
          </h2>
          <p className={`subtitle is-6 ${isDarkMode ? 'has-text-light' : 'has-text-grey-dark'}`}>Cicli completati: {cycle}</p>
        </div>

        <div
          className="relative box"
          style={{
            height: "200px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            border: `2px solid ${isDarkMode ? '#00d1b2' : '#00d1b2'}`,
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
              backgroundColor: "#ff3860",
              borderRadius: "50%",
              transition: "left 0.1s linear",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          ></div>
        </div>

        <div className="mt-6">
          <div className="select is-fullwidth">
            <select
              onChange={(e) => setExerciseType(e.target.value)}
              value={exerciseType}
              className="is-medium"
            >
              <option value="convergenza">Esercizio di Convergenza</option>
              <option value="laterale">Movimento Laterale</option>
              <option value="circolare">Movimento Circolare</option>
              <option value="focalizzazione">Esercizio di Focalizzazione</option>
              <option value="allontanamento">Esercizio di Allontanamento</option>
            </select>
          </div>
          <div className="buttons mt-2">
            <button
              className={`button is-danger is-medium ${isDarkMode ? 'has-background-light' : 'has-background-dark'}`}
              style={{ color: isDarkMode ? 'black' : 'white' }}
              onClick={startExercise}
              disabled={isMoving}
            >
              {isMoving ? "In movimento..." : "Inizia Esercizio"}
            </button>
            <button
              className={`button is-primary is-medium ml-2 ${isDarkMode ? 'has-background-light' : 'has-background-dark'}`}
              style={{ color: isDarkMode ? 'black' : 'white' }}
              onClick={() => {
                resetExercise();
                setExerciseType(exerciseType);
              }}
              disabled={!isMoving}
            >
              <FaRedo className="mr-1" />
              Ripristina
            </button>
          </div>

          <div className={`content has-text-centered mt-4 ${isDarkMode ? 'has-text-light' : 'has-text-dark'}`}>
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
      </div>
    </div>
  );
};

export default EyeExercise;
