import { getCurrentWeather, setScore, getShowAndPrintARandomJoke } from "./funciones.js";
import { configAllButtons } from "./ui/buttonsConfig.js";
// Obtención del clima de hoy
getCurrentWeather();
// Configuración de los botones next y score
configAllButtons(setScore, getShowAndPrintARandomJoke);
