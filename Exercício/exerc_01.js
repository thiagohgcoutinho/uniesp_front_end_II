var numero = prompt("Digite um número maior ou igual a zero: ");
var num = parseFloat(numero);

function testar2(numero2){
    var resul2 = numero2 % 2;
    if (numero2 >= 0){ 
        if (resul2 == 0){
            var resposta = "O número " + numero2 + " é PAR!";
        } else {
            var resposta = "O número " + numero2 + " é ÍMPAR!"
        }
    } else {
        var resposta = "Digite obrigatoriamente um número maior ou igual a zero!!!"
    }
    return resposta
}

var resultado = testar2(num);

document.getElementById("resultado").innerText = resultado