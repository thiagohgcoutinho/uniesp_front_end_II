var count = 0;

var listaAltura = [];

var listaSexo = [];

var maiorAltura = 0;

var menorAltura = 0;

var soma = 0;

var numFem = 0;

var numMas = 0;

while (count < 15){
    
    var altura = prompt("Qual sua altura?");
    listaAltura.push(parseFloat(altura));

        if (count < 1){
            maiorAltura = altura;
            menorAltura = altura;
        } else {

            if (altura > maiorAltura){

                maiorAltura = altura;
            };
    
            if (altura < menorAltura){
    
                menorAltura = altura;
            };

        };

    var sexo = prompt("Você é do sexo masculino ou feminino?");
    listaSexo.push(sexo);

        if (sexo == "feminino"){
            numFem += 1;
        };

    count++;
};

for (var i = 0; i < listaSexo.length; i++){

    if (listaSexo[i] == "masculino"){

        soma += listaAltura[i];

        numMas += 1;

    };

};

var media = soma / numMas;

document.getElementById("lista_altura").innerHTML = (listaAltura);

document.getElementById("lista_sexo").innerHTML = (listaSexo);

document.getElementById("maior_altura").innerHTML = (maiorAltura);

document.getElementById("menor_altura").innerHTML = (menorAltura);

document.getElementById("media_altura").innerHTML = (media);

document.getElementById("numero_feminino").innerHTML = (numFem);