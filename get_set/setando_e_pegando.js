class usuario{
    #nome
    #senha
    constructor(nome, senha){
    this.#nome=nome
    this.#senha=senha
    }
get nome(){
    return this.#nome
}
set nome(novo_nome){
    this.#nome=novo_nome
}
set senha(nova_senha){
    if(nova_senha.length > 4){
    this.#senha = nova_senha
}else{
    console.log("erro")
}
}
//lembrando que voce nunca faz um get de senha para deploy

get senha(){
    return this.#senha
}
}

const user1 = new usuario("anderson", "12323")
user1.senha = "12345"
console.log(user1.senha)
user1.nome = "josé"
console.log(user1.nome)