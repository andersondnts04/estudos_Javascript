class user{
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
        this.#nome = novo_nome
        console.log("cadastrado com sucesso")
    }
    set senha(nova_senha){
        if(nova_senha !=null ||nova_senha.length >= 3){
            this.#senha = nova_senha 
            console.log("senha alterada com sucesso!")
        }
    }
    //este get não pode existir no deploy é apenas um teste
    get senha(){
        return this.#senha
    }
}

const usuario1 = new user("josé",123)
console.log(usuario1.nome)
usuario1.nome = "washington"
console.log(usuario1.nome)
usuario1.senha = 124
console.log(usuario1.senha)