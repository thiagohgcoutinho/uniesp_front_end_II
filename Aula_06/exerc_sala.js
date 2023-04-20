// Questão 1

var pessoa = {
    nome: "Thiago",
    idade: 37,
    profissao: "Bombeiro Militar",
    endereco: {
        logradouro: "Rua Antônio Vieira da Silva",
        bairro: "Jardim São Paulo",
        cidade: "João Pessoa",
        cep: "58.053-175"
    }
};

// Questão 2

function imprimirDados (p) {
    console.log("Nome: " + p.nome);
    console.log("Idade: " + p.idade + " anos");
    console.log("Profissão: " + p.profissao);
    console.log("Logradouro: " + p.endereco.logradouro);
    console.log("Bairro: " + p.endereco.bairro);
    console.log("Cidade: " + p.endereco.cidade);
    console.log("CEP: " + p.endereco.cep)
}

imprimirDados(pessoa);

// Questão 3

pessoa.telefone = "(83) 99144-5979"

//Questão 4

pessoa.obterDados = function(){
    var resposta = `Nome: ${this.nome},
                    Idade: ${this.idade},
                    Profissão: ${this.profissao},
                    Telefone: ${this.telefone},
                    Logradouro: ${this.endereco.logradouro},
                    Bairro: ${this.endereco.bairro},
                    Cidade: ${this.endereco.cidade},
                    CEP: ${this.endereco.cep}`;
    return resposta;
};

console.log(pessoa.obterDados())

// Questão 5

pessoa.compararPessoas = function (p) {
    if (this.nome === p.nome && this.idade === p.idade) {
        return true;
    } else {
        return false;
    }
}

// Questão 6

var pessoa2 = {
    nome: "Ana",
    idade: 34,
    profissao: "Bombeiro Militar",
    endereco: {
        logradouro: "Rua Antônio Vieira da Silva",
        bairro: "Jardim São Paulo",
        cidade: "João Pessoa",
        cep: "58.053-175"
    }
};

// Questão 7

console.log(pessoa.compararPessoas(pessoa2))