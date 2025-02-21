

export function AdicionarAparelhoBOX() {
    // Remover a caixa existente, se houver
    let existingBox = document.getElementById("fundoAdicionarAparelho");
    if (existingBox) {
        existingBox.remove();
    }

   /*--------------------------------------------------COMPONENTES---------------------------------------------------------------*/

/*<div id="fundoAdicionarAparelho" class="fundoAdicionarAparelho">*/
    const fundoAdicionarAparelho = document.createElement("div");
    fundoAdicionarAparelho.setAttribute("class","fundoAdicionarAparelho");
    document.body.prepend(fundoAdicionarAparelho);

    /*<div id="baseAdicionarAparelho" class="baseAdicionarAparelho"> */
    const baseAdicionarAparelho = document.createElement("div");
    baseAdicionarAparelho.setAttribute("class","baseAdicionarAparelho");
    fundoAdicionarAparelho.appendChild(baseAdicionarAparelho);
        /* <h2 id="estilo_h2">Adicionar Aparelho</h2>*/
        const H2 = document.createElement("h2");
        H2.setAttribute("id","estilo_h2");
        H2.innerHTML = "Adicionar Aparelho";
        baseAdicionarAparelho.appendChild(H2);

        const campo = document.createElement("div");
        campo.setAttribute("class","campo");
        baseAdicionarAparelho.appendChild(campo);

        /**
         * 
         *  <label for="nomeAparelho">Nome do Aparelho</label>
            <input type="text" id="nomeAparelho" placeholder="Ex: Meu Celular">
         */
            const label1 = document.createElement("label");
            label1.setAttribute("for","nomeAparelho");
            label1.innerText = "Nome do Aparelho";
            campo.appendChild(label1);


            const nomeAparelho = document.createElement("input");
            nomeAparelho.setAttribute("type","text");
            nomeAparelho.setAttribute("id","nomeAparelho");
            nomeAparelho.setAttribute("placeholder","Ex: Meu Celular");
            campo.appendChild(nomeAparelho);


            /**
             *   <label for="tipoAparelho">Tipo do Aparelho</label>
             *   <input type="text" id="tipoAparelho" placeholder="Ex: Smartphone, Tablet, Notebook">
             */
            const label2 = document.createElement("label");
            label2.setAttribute("for","tipoAparelho");
            label2.innerText = "Tipo do Aparelho";
            campo.appendChild(label2);

            const tipoAparelho = document.createElement("input");
            tipoAparelho.setAttribute("type","text");
            tipoAparelho.setAttribute("id","tipoAparelho");
            tipoAparelho.setAttribute("placeholder","Ex: Smartphone, Tablet, Notebook");
            campo.appendChild(tipoAparelho);
            
            /**
             *    <label for="codigoAparelho">Código de Identificação (Opcional)</label>
             *   <input type="text" id="codigoAparelho" placeholder="Ex: IMEI ou ID único">
             */
            const label3 = document.createElement("label");
            label3.setAttribute("for","codigoAparelho");
            label3.innerText = "Código de Identificação (Opcional)";
            campo.appendChild(label3);

            const codigoAparelho = document.createElement("input");
            codigoAparelho.setAttribute("type","text");
            codigoAparelho.setAttribute("id","codigoAparelho");
            codigoAparelho.setAttribute("placeholder","Ex: IMEI ou ID único");
            campo.appendChild(codigoAparelho);
            /**
             * <label for="localizacaoAparelho">Localização Atual</label>
                <input type="text" id="localizacaoAparelho" placeholder="Capturando localização..." readonly>
            
             */
            const label4 = document.createElement("label");
            label4.setAttribute("for","localizacaoAparelho");
            label4.innerText = "Localização Atual";
            campo.appendChild(label4);


            const localizacaoAparelho = document.createElement("input");
            localizacaoAparelho.setAttribute("type","text");
            localizacaoAparelho.setAttribute("id","localizacaoAparelho");
            localizacaoAparelho.setAttribute("placeholder","Capturando localização...");
            localizacaoAparelho.setAttribute("readonly","true");
            campo.appendChild(localizacaoAparelho);

            /*-----------------------------------------------AREAS DOS BOTOES------------------------------------------------*/

            /**
             *   <button id="obterLocalizacao" class="button">Obter Localização</button>
             */
            const btn_obterLocalizacao = document.createElement("button");
            btn_obterLocalizacao.setAttribute("id","obterLocalizacao");
            btn_obterLocalizacao.setAttribute("class","button");
            btn_obterLocalizacao.innerText = "Obter Localização";
            campo.appendChild(btn_obterLocalizacao)

            btn_obterLocalizacao.addEventListener("click",()=>{

            })

            /**
       <div class="buttons">
            <button id="btnSalvarAparelho" class="button">Salvar</button>
            <button id="btnCancelarAparelho" class="button">Cancelar</button>
        </div> 
             *
             */
            
        const buttons = document.createElement("div");
        buttons.setAttribute("class","buttons");
        baseAdicionarAparelho.appendChild(buttons);

            const btnSalvarAparelho = document.createElement("button"); 
            btnSalvarAparelho.setAttribute("class","button");
            buttons.appendChild(btnSalvarAparelho);
            btnSalvarAparelho.innerText ="Salvar"

            const btnCancelarAparelho = document.createElement("button");
            btnCancelarAparelho.setAttribute("class","button");
            buttons.appendChild(btnCancelarAparelho);
            btnCancelarAparelho.innerText = "Cancelar";

            btnSalvarAparelho.addEventListener("click",()=>{

            })

            btnCancelarAparelho.addEventListener("click",()=>{

            })

        

            




    /*----------------------------------------------------------------------------------------------------------------------------*/

    // Aplicar estilos ao modal
    const estiloCSS = `
      .fundoAdicionarAparelho {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 9999; /* Garante que fique na frente de tudo */
    }   


        .baseAdicionarAparelho {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 600px;
            height:600px;
            text-align: center;
        }

        .campo {
            margin-bottom: 20px;
            text-align: left;
        }

        .campo label {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
            color: #555;
            margin: 5px;
        }

        .campo input {
            width: 90%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            font-size: 16px;
            color: #333;
        }

        .buttons {
            display: flex;
            justify-content: center; /* Centraliza os botões */
            gap: 10px; /* Espaçamento entre os botões */
            margin:30px;
        }


        .button {
            padding: 10px 20px;
            background-color: #5c8df8;
            border: none;
            color: #fff;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            width: auto;
            min-width:120px;

        }


        .button:hover {
            background-color: #4a77e1;
        }

        #btnCancelarAdicionar {
            background-color: #e1e1e1;
            color: #333;
        }

        #btnCancelarAdicionar:hover {
            background-color: #ccc;
        }
    `;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = estiloCSS;
    document.head.appendChild(styleElement);
}
