export function inicializarMapa() {
    var map = L.map('map').setView([-8.0476, -34.877], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    return map;
}

export function adicionarMarcador(map, lat, lng, texto = "Localização") {
    /*criando o marcador na latitude e longitude encontrado adicionando dentro do mapa, com um texto avisando onde o marcador está*/
    L.marker([lat, lng]).addTo(map).bindPopup(texto).openPopup();
}
