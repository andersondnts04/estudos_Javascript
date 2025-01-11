const formulario = document.querySelector("#formulario")
const nome_usuario = document.querySelector("#nome_usuario")
const resultado = document.querySelector("#resultado")

function buscar(e){
    e.preventDefault()
    fetch (`https://api.github.com/users/${nome_usuario.value}`)
    .then(resposta=> resposta.json())
    .then(dados=>{
        console.log(dados,"encontrou o usuario!!")
        resultado.innerHTML=`
        <p>nome:${dados.name}</p>
        <p>email:${dados.email}</p>
        <p>seguidores:${dados.followers}</p>
        <img src=${dados.avatar_url} alt=foto de perfil/>
        `
    })
    .catch(erro=>console.log(erro,"usuario não existe."))
}
formulario.addEventListener("submit", buscar)