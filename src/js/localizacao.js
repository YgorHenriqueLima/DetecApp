import { adicionarMarcador } from "./mapa.js";

export function obterLocalizacaoUsuario(map) {
    if (navigator.geolocation) {
        /*OBTENDO A POSIÇÃO DO APARELHO*/
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                map.setView([lat, lng], 13);
                adicionarMarcador(map, lat, lng, "Você está aqui");
            },
            function (error) {
                console.error("Erro ao obter localização: ", error);
                alert("Erro ao obter sua localização.");
            }
        );
    } else {
        alert("Geolocalização não suportada pelo seu navegador.");
    }
}
