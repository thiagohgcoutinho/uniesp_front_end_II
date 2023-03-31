function multiplicar(array){
    if (array.length == 0){
        console.log("Digite um arry com valores numéricos válidos!")
    } else {
        console.log(array)
        var resultado = array.map(function(x){return x*2})
        console.log(resultado)
    }
}

var arrayUsuario = [3, 6, 9];

var resposta = multiplicar(arrayUsuario);