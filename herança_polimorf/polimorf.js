/* polimorfismo é quando um objeto contem um metodo que difere em tipo e retorno para alguns e para outros objetos ele pode
ser retornado da forma como foi criado*/
class animal{
    constructor(especie ,nome, raca, peso, cor){
        this.especie = especie
        this.nome = nome
        this.raca = raca
        this.peso = peso
        this.cor = cor
    }
    emitirSom(){
        return `O animal da epescie ${this.especie} emitiu som`
    }
}

class cachorro extends animal{
    constructor(especie, nome, raca, peso, cor){
        super(especie,nome, raca, peso, cor)
    }
    emitirSom(){
        return `O cachorro latiu`
    }
}
class baleia extends animal{
    constructor(especie, nome, raca, peso, cor){
        super(especie,nome, raca, peso, cor)
}
   
}
const baleia1 = new baleia("baleia", "free willy", "assasina", "1 tonelada", "branco e preto")
console.log(baleia1.emitirSom())