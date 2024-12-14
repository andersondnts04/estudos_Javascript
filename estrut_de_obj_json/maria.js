const nome_da_pessoa = prompt("digite o nome da pessoa: ")
const idade_da_pessoa = prompt("digite a sua idade: ")

const pessoa = {
    nome: nome_da_pessoa,
    idade: idade_da_pessoa,
    habilitada: false,
    estudar: ()=>{
        console.log("maria esta estudando")
    },
    frutas_preferidas: ["banana", "maçã", "uva"],
    mae:{
        nome: "joana",
        idade: 48,
        casada: true,
    }

}
console.log(pessoa.nome)
console.log(pessoa.idade)