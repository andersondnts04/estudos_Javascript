class Fruta{
    constructor(nome, preco, qtde_estoque){
    this.nome = nome
    this.preco = preco
    this.qtde_estoque = qtde_estoque

}

adc_ao_estoque(qtde_de_frutas){
    this.qtde_estoque += qtde_de_frutas
    return `quantidade no estoque agora é ${this.qtde_estoque}`
}
vender(qtde_de_frutas){
    this.qtde_estoque -= qtde_de_frutas
    return `quantidade no estoque agora é ${this.qtde_estoque}`
}

}
const fruta1 = new Fruta ("maçã", 10.00 , 5)

console.log(fruta1.adc_ao_estoque(10))
console.log(fruta1.vender(5))