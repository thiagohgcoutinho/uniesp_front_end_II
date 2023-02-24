var aluno = "João";

console.log(aluno);

function teste() {
    var aluno2 = "Pedro";
    console.log(aluno);
    console.log(aluno2);
    return aluno2;
}

console.log(teste());

if (aluno == "João") {
    let resultado = "Olá João!";
    var resultado2 = "Olá João"
    console.log(resultado)
} else {
    console.log(resultado);
    var resultado2 = "Olá desconhecido!"
}

for (var i = 0; i <= 10; i++){
    console.log("número", i);
}
    