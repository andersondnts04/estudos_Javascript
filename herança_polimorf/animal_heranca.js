class animal{
    constructor(raca, peso, cor){
        this.raca=raca
        this.peso=peso
        this.cor=cor
    }
    comer(){
        return`o animal ${this.raca} esta comendo`
    }
    dormir(){
        return`o animal ${this.raca} esta dormindo`
    }
}
class cachorro extends animal{
    constructor(raca, peso, cor, adestrado = true||false){
    super(raca, peso, cor)
    this.adestrado = adestrado
}
    pegar_a_bolinha(){
        return`o cachorro da raça ${this.raca} foi pegar a bolinha`
    }
    adestrou(){
        if(this.adestrado === true){
        return `o cachorro da raça ${this.raca} é adestrado`
    }else{
        return`o cachorro da raça ${this.raca} não é adestrado`
    }
}
comer(){
    return`o cachorro da raça ${this.raca} está comendo ração`
}
}

class gato extends animal{
    constructor(raca, peso, cor){
        super(raca, peso, cor)
    }
    amassarPaozinho(){
        return `o gato da raça ${this.raca} e cor ${this.cor} esta amassando`
    }
    comer(){
        return `o gato ${this.raca} esta comendo peixe`
    }
}
class peixe extends animal{
    constructor(raca, peso, cor, tamanho){
        super(raca, peso, cor)
        this.tamanho = tamanho
    }
}

const cachorro1 = new cachorro("rotweiller", "40kg", "preto", true)

console.log(cachorro1)
console.log(cachorro1.comer())
console.log(cachorro1.dormir())
console.log(cachorro1.adestrou())

const gato1 = new gato("siames", "6kg", "fulvo")

console.log(gato1)
console.log(gato1.amassarPaozinho())
console.log(gato1.comer())

const peixe1 = new peixe("beta", "0.05kg", "vermelho", "3cm")

console.log(peixe1)