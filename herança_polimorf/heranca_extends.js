//herança são os parametros que a subclasse herda da classe
class veiculo{
    constructor(marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
  ligar(){
    return `veiculo do modelo ${this.modelo} ligou`
  }
  desligar(){
    return `Veiculo do modelo ${this.modelo} desligou`
  }
}
class moto extends veiculo{
    constructor(marca, modelo, ano,cor, cilindradas){
        super(marca, modelo, ano, cor);        
        this.cilindradas = cilindradas;  
}
retorno(){
  return `A moto: ${this.marca}\nmodelo: ${this.modelo}\nano: ${this.ano}\ncor: ${this.cor}\ncilindradas: ${this.cilindradas}`
}
empinar(){
  return `A moto do modelo: ${this.modelo} empinou`
}
}
class carro extends veiculo{
    constructor(marca, modelo, ano, cor, qtde_portas, motor){
        super(marca, modelo, ano, cor)
        this.qtde_portas = qtde_portas;
        this.motor = motor
    }
    retorno(){
        return `marca: ${this.marca}\nmodelo: ${this.modelo}\nano: ${this.ano}
cor: ${this.cor}\nquantidade de portas: ${this.qtde_portas} \nmotor: ${this.motor}`
    }
    cavalo_de_pau(){
      return`O carro ${this.modelo} deu cavalo de pau`
    }
}


const carro1 = new carro("Hyundai", "HB20", 2020 ,"branco", 4, "2.0")
const moto1 = new moto("honda", "bross", 2019, "branca", 250)
const navio = new veiculo("sea gold","titanic", 2025, "branco")

console.log(carro1.retorno())
console.log(carro1.ligar())
console.log(carro1.desligar())
console.log(carro1.cavalo_de_pau())


console.log(moto1.ligar())
console.log(moto1.desligar())
console.log(moto1.empinar())
console.log(moto1.retorno())

console.log(navio.ligar())
console.log(navio.desligar())