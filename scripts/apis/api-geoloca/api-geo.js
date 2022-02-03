import { GeoLoca } from "../../models/geoloca/geoloca.js";
// GEOLOCALIZACIÓN PARA PODER CONSULTAR LA API CLIMATICA
export function getGeolocation() {
    if (navigator.geolocation) {
        console.log("geolocalización disponible");
        navigator.geolocation.getCurrentPosition(position => {
            console.log("Acceso con éxito a la geolocalización");
            return new GeoLoca(position.coords.latitude, position.coords.longitude);
        }, error => {
            console.log("Sin acceso a geolocalización. Se devuelven coordenadas simuladas.", error.message);
            return new GeoLoca(41.391097, 2.1548569);
        });
    }
}
