//encapsulamento
class pessoa {  
    #nome
    constructor(nome){
        this.#nome=nome

    }
//primeiro eu faço um get com o nome para retornar o nome original na hora de chamar o console.log da variavel
get nome(){
    return this.#nome
}
//eu seto os items com esse metodo set
set nome(novo_nome){
    this.#nome = novo_nome
}
}
//essa variavel contem os parametros, eu apaguei os outros parametros do codigo pq n estão sendo usados
const user1 = new pessoa ("anderson", "anderson@gmail.com", "12345")
console.log(user1.nome)
user1.nome = "josé"
console.log(user1.nome)