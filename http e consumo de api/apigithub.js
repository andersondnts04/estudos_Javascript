const nome_usuario = document.querySelector("#nome_usuario")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

function buscarGIT(e){
    e.preventDefault()
fetch (`https://api.github.com/users/${nome_usuario.value}`)
.then(busca => busca.json())
.then(dados=> {
    console.log(dados,"encontrou o usuario")
    resultado.innerHTML=`
    <p>nome:${dados.name}</p>
    <p>email:${dados.email}</p>}
    <image src=${dados.avatar_url}alt="foto de perfil"/>
    `
})
.catch(erro=> console.log(erro,"não encontrado"))

}
formulario.addEventListener("submit", buscarGIT)