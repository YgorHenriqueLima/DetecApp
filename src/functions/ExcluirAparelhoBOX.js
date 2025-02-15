export default function ExcluirAparelhoBOX() {
    /**
     * - ExcluirAparelhoBOX serve para criar uma caixa interativa totalmente feita no javascript para excluir o aparelho ou cancelar  
     * 
     * 
     */

    // Remover a caixa de exclusão se já existir
  
    let existingBox = document.getElementById("fundoExcluirAparelho");
    if (existingBox) {
        existingBox.remove();
    }

    // Criar estilo para a caixa de exclusão
    const estiloCSS = `
        .fundoExcluirAparelho {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.75);
            z-index: 1000;
            box-sizing: border-box;
        }
        .baseExcluirAparelho {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        .botoesExcluirAparelho {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
            width: 100%;
        }
        .botoesExcluirAparelho button {
            cursor: pointer;
            padding: 10px;
            width: 100px;
            border-radius: 5px;
            font-size: 16px;
            border: none;
            color: #fff;
        }
        .btn-confirmar {
            background-color: red;
        }
        .btn-cancelar {
            background-color: gray;
        }
    `;

    /*
    
    criando o elemento style para adicionar dentro do head do html
    
    */
    const styleElement = document.createElement("style");
    styleElement.innerHTML = estiloCSS;
    document.head.appendChild(styleElement);

    // Criar a caixa de exclusão
    const fundoExcluirAparelho = document.createElement("div");
    fundoExcluirAparelho.setAttribute("id", "fundoExcluirAparelho");
    fundoExcluirAparelho.setAttribute("class", "fundoExcluirAparelho");
    document.body.prepend(fundoExcluirAparelho);

    /*adicionando a base do BOX*/
    const baseExcluirAparelho = document.createElement("div");
    baseExcluirAparelho.setAttribute("id", "baseExcluirAparelho");
    baseExcluirAparelho.setAttribute("class", "baseExcluirAparelho");
    
    /*adicionando para dentro do fundoExcluirAparelho a Base*/
    fundoExcluirAparelho.appendChild(baseExcluirAparelho);

    /*--------------------MENSAGEM DO ELEMENTO-----------*/
    const mensagem = document.createElement("p");
    /*ADICIONANDO O NOME DO APARELHO A CAIXA*/
    let nomeAparelho = document.getElementById("nome-dispositivo")

    mensagem.innerHTML = `Tem certeza que deseja excluir o aparelho ${nomeAparelho.innerText}?`;
    baseExcluirAparelho.appendChild(mensagem);

    const botoesExcluirAparelho = document.createElement("div");
    botoesExcluirAparelho.setAttribute("class", "botoesExcluirAparelho");

    /*ADICIONANDO O BOTOES DE EXCLUIR APARELHO NA BASE*/
    baseExcluirAparelho.appendChild(botoesExcluirAparelho);

    /*BOTÃO DE CONFIRMAR*/
    const btnConfirmar = document.createElement("button");
    btnConfirmar.setAttribute("id", "btn_confirmar");
    btnConfirmar.setAttribute("class", "btn-confirmar");
    btnConfirmar.innerHTML = "Excluir";
    
    /*BOTÃO DE CANCELAR*/
    const btnCancelar = document.createElement("button");
    btnCancelar.setAttribute("id", "btn_cancelar");
    btnCancelar.setAttribute("class", "btn-cancelar");
    btnCancelar.innerHTML = "Cancelar";
    
    /*EVENTO DE CONFIRMAR A EXCLUSÃO DO APARELHO*/
    btnConfirmar.addEventListener("click", function () {
        ExcluirAparelho(aparelhoId);
        fundoExcluirAparelho.remove();
    });
    
    /*EVENTO DE CANCELAR UM BOTÃO*/
    btnCancelar.addEventListener("click", function () {
        fundoExcluirAparelho.remove();
    });
    
    botoesExcluirAparelho.appendChild(btnConfirmar);
    botoesExcluirAparelho.appendChild(btnCancelar);

}