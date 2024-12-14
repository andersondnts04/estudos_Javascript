class funcionario{
    constructor(nome, cpf){
        this.nome=nome
        this.cpf=cpf
    }
    baterPonto(){
        return`bateu o ponto`
    }
}
class gerente extends funcionario{
    constructor(nome,cpf, gerente){
        super(nome, cpf)
        this.gerente=gerente
}
    demitir(){
        return `O gerente ${this.gerente} demitiu ${this.nome}`
    }

}
const gerente1 = new gerente("Astolfo", "108.356.789-09","josé" )
const funcionario1 = new funcionario("Astolfo", "123.456.789-01")
console.log(gerente1.demitir())