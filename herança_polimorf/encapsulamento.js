class usuario{
    #email
    #senha
    constructor(email, senha){
        this.#email=email
        this.#senha=senha
    }
    get email(){
        return this.#email
    }
    set email(novo_email){
        this.#email = novo_email
        return "email alterado com sucesso"
    }
    get email(){
        return this.#email
    }
    set senha(nova_senha){
        if(nova_senha.length >= 4){
            this.#senha=nova_senha
            console.log("senha alterada com sucesso")
        }
        else{
            console.log("erro")
        }
    }
    
//por padrão eu não faria um get senha pois isso é falha na segurança mas aqui eu quis ver ela alterada
    get senha(){
        return this.#senha
    }
    
}
const user1 = new usuario("email@gmail.com", "1234")
console.log(user1.email)
user1.email = "juniormessias@gmail.com"
console.log(user1.email)
user1.senha = "ABCD"
console.log(user1.senha)