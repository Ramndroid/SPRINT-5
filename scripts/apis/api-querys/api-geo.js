import { GeoLoca } from "../../models/geoloca.js";
// GEOLOCALIZACIÓN: para obtener la posición y usarla en la api climática
export function getGeolocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(new GeoLoca(position.coords.latitude, position.coords.longitude));
            }, error => {
                console.log("Sin acceso a geolocalización. Se devuelven coordenadas simuladas.", error.message);
                resolve(new GeoLoca(41.391097, 2.1548569));
            });
        }
        else {
            reject(new Error("Sin acceso a la geolocalización"));
        }
    });
}
