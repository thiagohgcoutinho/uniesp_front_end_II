/**var numero = prompt("Digite um número maior ou igual a zero: ");
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
*/

function testar(numero){
    if (numero >= 0){ 
        if (numero%2 == 0){
            console.log("O número " + numero + " é PAR!");
        } else {
            console.log("O número " + numero + " é ÍMPAR!");
        }
    } else {
        console.log("Digite obrigatoriamente um número maior ou igual a zero!!!");
    }
}

var num = 7

var resultado = testar(num)