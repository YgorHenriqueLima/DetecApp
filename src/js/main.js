import { inicializarMapa } from './mapa.js';
import { obterLocalizacaoUsuario } from './localizacao.js';
import { ExcluirAparelhoBOX } from './components/ExcluirAparelhoBOX.js';
import { AdicionarAparelhoBOX } from './components/AdicionarAparelhoBOX.js';

document.addEventListener("DOMContentLoaded", function () {
    const map = inicializarMapa();
    const btn_ativarLocalizacao = document.getElementById("btn_ativarLocalizacao");
    const btn_adicionarAparelho = document.getElementById("btn_adicionarAparelho");
    const btn_excluirAparelho = document.getElementById("btn_excluirAparelho");

    btn_ativarLocalizacao.addEventListener("click",()=>{
        obterLocalizacaoUsuario(map);
    })
    
    btn_adicionarAparelho.addEventListener("click",()=>{
        AdicionarAparelhoBOX();
    })

    btn_excluirAparelho.addEventListener("click",()=>{
        ExcluirAparelhoBOX();
    })


   
});
