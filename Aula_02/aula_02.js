var count = 0;

var listaAltura = [];

var listaSexo = [];

var maiorAltura = 0;

var menorAltura = 10;

var soma = 0;

var numFem = 0;

while (count < 3){
    
    var altura = prompt("Qual sua altura?");
    listaAltura.push(parseFloat(altura));

        if (altura > maiorAltura){

            maiorAltura = altura;
        };

        if (altura < menorAltura){

            menorAltura = altura;
        };

    var sexo = prompt("Você é do sexo masculino ou feminino?");
    listaSexo.push(sexo);

        if (sexo == "feminino"){
            numFem = numFem + 1;
        };

    count++;
};


for (var i = 0; i < listaAltura.length; i++){

    soma+=listaAltura[i];

};

var media = soma / listaAltura.length;

document.getElementById("lista_altura").innerHTML = (listaAltura);

document.getElementById("lista_sexo").innerHTML = (listaSexo);

document.getElementById("maior_altura").innerHTML = (maiorAltura);

document.getElementById("menor_altura").innerHTML = (menorAltura);

document.getElementById("media_altura").innerHTML = (media);

document.getElementById("numero_feminino").innerHTML = (numFem);