class Agencia{
    constructor(titular, numero, agencia, saldo){
        this.titular = titular
        this.numero = numero 
        this.agencia = agencia
        this.saldo = 0
    }

    depositar(valor){
        if(valor >= 1){
        this.saldo += valor
        return `Valor adicionado ${valor} , seu saldo ficou sendo ${this.saldo}`
    }else{
        return `O valor minimo é 1 real`
    }
    }

    sacar(valor){
        if(this.saldo >= valor){
        this.saldo -= valor
        return `Saque efetuado com sucesso! ${valor}`
    }
    else{
        return `Saldo insuficiente.`
    }
    }

    verificar_saldo(){
        if(this.saldo == 0){
            return `saldo inesistente ${this.saldo}`
    }else{
        return `O saldo é ${this.saldo}`
    }
    }
}
const conta1 = new Agencia("Anderson Dantas", 123.456 , 1020)

console.log(conta1.depositar(1000))
console.log(conta1.sacar(800))
console.log(conta1.verificar_saldo())
console.log(conta1.sacar(2000))
console.log(conta1.depositar(0.50))