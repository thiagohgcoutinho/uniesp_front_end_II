function multiplicar2(){
    if (arguments.length == 0){
        console.log("Insira ao menos um número");
    } else {
        for (var i = 0; i < arguments.length; i++){
            var resultado = arguments[i] * 2;
            console.log(resultado);
        }
    }
}

var numerosUsuario = (multiplicar2(6, 8, 12));