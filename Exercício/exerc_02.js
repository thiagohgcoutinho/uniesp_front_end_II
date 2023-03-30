var numeroUsuario = prompt("Digite um número. Para parar a lista, digite 0.");
var listaUsuario = [];
var listaMult = [];

while (numeroUsuario != 0){
    listaUsuario.push(parseFloat(numeroUsuario));
    var numeroUsuario = prompt("Digite um número. Para parar a lista, digite 0.");
}


function multiplicarLista(lista){
    document.getElementById("lista_usuario").innerHTML = listaUsuario;
    for (var i = 0; i < lista.length; i++){
        var listaMultiplicada
    }
}