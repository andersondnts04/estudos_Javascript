const usuario_pessoa = {
    email:"adpp@gmail.com",
    password:"12345"
}
//primeiro eu seto o item e defino o seu nome "usuario"
localStorage.setItem("usuario", JSON.stringify(usuario_pessoa))
//agora eu pego o item com o get e passo o nome dele
const user = localStorage.getItem("usuario")

console.log(user)
//aqui eu pego o item stringificado e transformo e json com o metodo parse
const transform_JSON = JSON.parse(user)

console.log(transform_JSON)