class Pessoa{
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    descrevendo(){
        return ` Meu nome: ${this.nome}\n minha idade: ${this.idade}\n minha altura é: ${this.altura}`
    }
    atualizarIdade(idadeAtualizada){
       this.idade = idadeAtualizada
    }
}

const pessoa1 = new Pessoa("Joseph Stalim", 30 , 1.89)
const pessoa2 = new Pessoa("Michael Jordan", 40 , 2.00)


pessoa1.atualizarIdade(50)
console.log(pessoa1.descrevendo())
//console.log(pessoa2.descrevendo())