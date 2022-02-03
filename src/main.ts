import { getCurrentWeather, setScore, getShowAndPrintARandomJoke } from "./funciones.js";
import { initButtons } from "./ui/buttonsConfig.js";

// Obtención del clima de hoy
getCurrentWeather ("ca"); // admite valores como 'en', 'es, 'ca',... representan idiomas

// Configuración de los botones
initButtons (
    setScore, 
    getShowAndPrintARandomJoke
);