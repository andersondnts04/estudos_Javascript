class Carro{
    constructor(marca, modelo, ano, cor){
     this.marca = marca
     this.modelo = modelo
     this.ano = ano
     this.cor = cor
    }

 apresentar() {
    return ` Marca: ${this.marca} \n Modelo: ${this.modelo}\n Ano: ${this.ano}\n Valor: ${this.cor}`;
    }

}



const carro1 = new Carro("Toyota", "Corola", "2024", "Preto")
const carro2 = new Carro("Wolkswagem", "Gol", "2019", "Vermelho")

console.log(carro1.apresentar())
console.log(carro2.apresentar())