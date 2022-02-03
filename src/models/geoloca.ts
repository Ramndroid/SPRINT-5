import { IGeoLoca } from "./interfaces/igeoloca.js";

// CLASE GEOLOCA: modelo de representación de unas coordenadas
export class GeoLoca implements IGeoLoca {
    constructor (
        public latitude: number,
        public longitude: number,
    ) {}
}