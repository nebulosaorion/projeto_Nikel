const nome ="Marcelo Eltz";
let nome2 ="";
let pessoaDefault ={
    nome: "Marcelo Eltz",
    idade:"33",
    trabalho:"Programador",

}

let nomes =["Marcelo Eltz","Maria Silva","Pedro Silva"];



let pessoas=[
    {
        nome:"Marcelo Eltz",
        idade:"33",
        trabalho:"Programador"
    },
    {
        nome:"Miriã Evangelista",
        idade:"29",
        trabalho:"Engenheira de Software"
    }
];

function alterarNome(){
    nome2="Miriã Evangelista";
    console.log("Valor alterado:");
    console.log("nome2");
}

function recebaEateraNome(novoNome){
    nome2=novoNome;
    console.log("Valor alterado recebend um nome:");
    console.log(nome2);
}

function imprimiPessoa(pessoa){
    console.log("Nome:")
    console.log(pessoa.nome);

    console.log("Idade:")
    console.log(pessoa.idade);

    console.log("Trabalho:")
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

adicionarPessoa({
    nome:"Matheus Evangelista",
    idade:"32",
    trabalho:"Caminhoneiro"
});

console.log(pessoas);
