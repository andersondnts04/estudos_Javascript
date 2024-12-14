class produto{
    constructor(nome, preco){
        this.nome=nome
        this.preco=preco
    }
}
class Pdigital extends produto{
    constructor(nome, preco, video = false||true, pdf=false||true){
        super(nome, preco)
            this.video=video
            this.pdf=pdf
        
    }
}
class Pfisico extends produto{
    constructor(nome, preco, estoque){
        super(nome, preco)
        this.estoque=estoque
    }
}
const P1 = new Pdigital("curso gustavo guanabara", "100,00", true, true)
console.log(P1)
const P2 = new Pfisico("pó de mico do josé", "10,00", 30)
console.log(P2)