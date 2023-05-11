function cadastrar() {

    var nome = document.getElementById("iptNome").value;

    var mensagem = document.getElementById("txtMensagem").value;

    var obj = {};
    obj.nome - nome;
    obj.mensagem = mensagem;

    // obter o array
    // var mensagens = obterMensagem(); 
    

    var linha = document.createElement("tr");

    var colunaNome = document.createElement("td");
    colunaNome.innerHTML = nome;

    var colunaMensagem = document.createElement("td");
    colunaMensagem.innerHTML = mensagem;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaMensagem);

    var tabela = document.getElementById("tabela");

    tabela.appendChild(linha);

}

function estilizarTabela() {

    var linhas = document.getElementsByTagName("tr");
    var pintar = true;
    for(var i=1; i<linhas.length; i++){
        if (pintar) {
            linhas[i].setAttribute("style", "background-color:gray; color:white")
            pintar = false;
        } else {
            pintar = true;
        }
    }

}