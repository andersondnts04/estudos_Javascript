class Carro{
    constructor(modelo, ano){
        this.modelo = modelo
        this.ano = ano
        this.ligado = false || true
    }
    exibirInformacoes(){
        return ` Modelo: ${this.modelo} \n Ano: ${this.ano} \n Ligado: ${this.ligado}`
    }
    
    ligar(){
        if(this.ligado === false){
            this.ligado = true
            return `carro ${this.modelo} já esta ligado`
        } else{
            this.ligado === true
            return `carro ${this.modelo} estava desligado e ligou`
        }
    }
    desligar(){
        if(this.ligado){
            this.ligado = false
            return `O carro ${this.modelo} foi desligado`
        }else{
            this.ligado === false 
            return `O carro ${this.modelo} estava desligado`
        }
   
    }
}
const carro1 = new Carro('corola', 2024, false)
const carro2 = new Carro('gol', 2009, false)

console.log(carro1.ligar())
console.log(carro2.desligar())
console.log(carro1.exibirInformacoes())