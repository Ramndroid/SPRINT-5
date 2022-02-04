// INTERFACE IWeather: diseño de datos para api climática
export interface IWeather {
    id: number;
    description: string;
    icon: string;
    temp: number;
    units: string;
    lang: string;
    getTemp(): string;
    getIcon(): string;
    showTemp(): string;
}