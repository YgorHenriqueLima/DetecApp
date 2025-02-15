import ExcluirAparelhoBOX from "./functions/ExcluirAparelhoBOX";

var map = L.map('map').setView([-8.0476, -34.877], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const Obter_localizacao_computador = document.getElementById("Obter_localizacao_computador")


const btn_excluirAparelho = document.getElementById("btn_excluirAparelho")


Obter_localizacao_computador.addEventListener("click",()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            map.setView([lat, lng], 13);
            L.marker([lat, lng]).addTo(map)
                .bindPopup("Você está aqui").openPopup();
        }, function(error) {
            console.error("Erro ao obter localização: ", error);
        });
    } else {
        alert("Geolocalização não suportada pelo seu navegador.");
    }
});

btn_excluirAparelho.addEventListener("click", () => {
    ExcluirAparelhoBOX()
});