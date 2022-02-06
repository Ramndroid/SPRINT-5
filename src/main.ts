import { getCurrentWeather, setScore, getShowAndPrintARandomJoke } from "./funciones.js";
import { initButtons } from "./ui/buttonsConfig.js";

// Obtención del clima de hoy
getCurrentWeather(); 

// Configuración de los botones next y score
initButtons(setScore, getShowAndPrintARandomJoke);