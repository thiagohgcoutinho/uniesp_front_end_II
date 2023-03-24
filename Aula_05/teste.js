// Fuction Declaration

function somar (numero1, numero2) {

    var total = numero1 + numero2;
    return total;
}

var resultado = somar(1,5);

console.log(resultado);

// Fuction Expression

var multiplicar = function(n1, n2) {
    return(n1*n2);
}

var resul2 = multiplicar(2,6);

console.log(resul2);

// Arguments

function somar () {

    var total = arguments[0] + arguments[1];
    return total;
}

var resultado = somar(1,5,8,9,5);

console.log(resultado);