export function AdicionarAparelhoBOX() {
    // Remover a caixa existente, se houver
    let existingBox = document.getElementById("fundoAdicionarAparelho");
    if (existingBox) {
        existingBox.remove();
    }

   /*--------------------------------------------------COMPONENTES---------------------------------------------------------------*/
    /*CODIGO HTML

    <div id="fundoAdicionarAparelho" class="fundoAdicionarAparelho">
    <div id="baseAdicionarAparelho" class="baseAdicionarAparelho">
        <h2 id="estilo_h2">Adicionar Aparelho</h2>
       
        <div class="campo">
            <label for="nomeAparelho">Nome do Aparelho</label>
            <input type="text" id="nomeAparelho" placeholder="Ex: Meu Celular">

            
            <label for="tipoAparelho">Tipo do Aparelho</label>
            <input type="text" id="tipoAparelho" placeholder="Ex: Smartphone, Tablet, Notebook">
            
                            
            <label for="codigoAparelho">Código de Identificação (Opcional)</label>
            <input type="text" id="codigoAparelho" placeholder="Ex: IMEI ou ID único">
            

            
            <label for="localizacaoAparelho">Localização Atual</label>
            <input type="text" id="localizacaoAparelho" placeholder="Capturando localização..." readonly>
            

            
            <button id="obterLocalizacao" class="button">Obter Localização</button>

        </div>
     
        <div class="buttons">
            <button id="btnSalvarAparelho" class="button">Salvar</button>
            <button id="btnCancelarAdicionar" class="button">Cancelar</button>
        </div>
    </div>
</div>
    
    */


    const fundoAdicionarAparelho = document.createElement("div");
    fundoAdicionarAparelho.setAttribute("class","fundoAdicionarAparelho");
    document.body.prepend(fundoAdicionarAparelho);

    const baseAdicionarAparelho = document.createElement("div");
    baseAdicionarAparelho.setAttribute("class","baseAdicionarAparelho");
    fundoAdicionarAparelho.appendChild(baseAdicionarAparelho);

        const H2 = document.createElement("h2");
        H2.setAttribute("id","estilo_h2");
        H2.innerHTML = "Adicionar Aparelho";
        baseAdicionarAparelho.appendChild(H2);

        const campo = document.createElement("div");
        campo.setAttribute("class","campo");
        baseAdicionarAparelho.appendChild(campo);

            const label = document.createElement("label");
            label.setAttribute("for","nomeAparelho");
            label.innerHTML = "Nome do Aparelho";

            




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
        }

        .baseAdicionarAparelho {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 500px;
            text-align: center;
        }

        .campo {
            margin-bottom: 15px;
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
            justify-content: space-between;
            margin-top: 20px;
        }

        .button {
            padding: 10px 20px;
            background-color: #5c8df8;
            border: none;
            color: #fff;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            width: 48%;
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
