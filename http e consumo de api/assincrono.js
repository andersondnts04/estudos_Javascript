const nome_usuario = document.querySelector("#nome_usuario")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")


async function buscarCEP(e){
    e.preventDefault()

    try{
    const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    const dados = await resposta.json()
    if(dados.erro){
        resultado.innerHTML= `<p>cep invalido</p>`
    }else{
        resultado.innerHTML= `<h2>Resultado logradouro ${dados.logradouro}</h2>`
    }
    }catch(erro){
        resultado.innerHTML= `<p>use numeros com 8 digitos</p>`
    }
}



formulario.addEventListener("submit", buscarCEP)