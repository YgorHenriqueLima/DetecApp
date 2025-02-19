export function AdicionarAparelhoBOX() {
    // Remover a caixa existente, se houver
    let existingBox = document.getElementById("fundoAdicionarAparelho");
    if (existingBox) {
        existingBox.remove();
    }

    // Criar a estrutura da caixa de adicionar aparelho
    const fundoAdicionarAparelho = document.createElement("div");
    fundoAdicionarAparelho.setAttribute("id", "fundoAdicionarAparelho");
    fundoAdicionarAparelho.setAttribute("class", "fundoAdicionarAparelho");
    document.body.appendChild(fundoAdicionarAparelho);

    const baseAdicionarAparelho = document.createElement("div");
    baseAdicionarAparelho.setAttribute("id", "baseAdicionarAparelho");
    baseAdicionarAparelho.setAttribute("class", "baseAdicionarAparelho");
    fundoAdicionarAparelho.appendChild(baseAdicionarAparelho);

    // Criar título
    const titulo = document.createElement("h2");
    titulo.setAttribute("id", "estilo_h2");
    titulo.textContent = "Adicionar Aparelho";
    baseAdicionarAparelho.appendChild(titulo);

    // Função para criar campos
    function criarCampo(id, label, placeholder, type = "text", readonly = false) {
        const campo = document.createElement("div");
        campo.setAttribute("class", "campo");

        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", id);
        labelElement.textContent = label;
        campo.appendChild(labelElement);

        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", type);
        inputElement.setAttribute("id", id);
        inputElement.setAttribute("placeholder", placeholder);
        if (readonly) {
            inputElement.setAttribute("readonly", "true");
        }
        campo.appendChild(inputElement);

        return campo;
    }

    // Adicionar campos ao formulário
    baseAdicionarAparelho.appendChild(criarCampo("nomeAparelho", "Nome do Aparelho", "Ex: Meu Celular"));
    baseAdicionarAparelho.appendChild(criarCampo("tipoAparelho", "Tipo do Aparelho", "Ex: Smartphone, Tablet, Notebook"));
    baseAdicionarAparelho.appendChild(criarCampo("codigoAparelho", "Código de Identificação (Opcional)", "Ex: IMEI ou ID único"));

    // Campo de localização com botão
    const campoLocalizacao = criarCampo("localizacaoAparelho", "Localização Atual", "Capturando localização...", "text", true);
    const btnObterLocalizacao = document.createElement("button");
    btnObterLocalizacao.setAttribute("id", "obterLocalizacao");
    btnObterLocalizacao.setAttribute("class", "button");
    btnObterLocalizacao.textContent = "Obter Localização";
    campoLocalizacao.appendChild(btnObterLocalizacao);
    baseAdicionarAparelho.appendChild(campoLocalizacao);

    // Botões de ação
    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("class", "buttons");

    const btnSalvar = document.createElement("button");
    btnSalvar.setAttribute("id", "btnSalvarAparelho");
    btnSalvar.setAttribute("class", "button");
    btnSalvar.textContent = "Salvar";

    const btnCancelar = document.createElement("button");
    btnCancelar.setAttribute("id", "btnCancelarAdicionar");
    btnCancelar.setAttribute("class", "button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.addEventListener("click", () => fundoAdicionarAparelho.remove());

    buttonsContainer.appendChild(btnSalvar);
    buttonsContainer.appendChild(btnCancelar);
    baseAdicionarAparelho.appendChild(buttonsContainer);

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
            width: 400px;
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
        }

        .campo input, .campo select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
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
