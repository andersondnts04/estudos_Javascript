const cep = document.querySelector("#cep")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

function buscarCEP(e){
    e.preventDefault()
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        if(dados.erro === true){
            resultado.textContent
        }else{
            resultado.innerHTML = `
            <p>Endereço: ${dados.logradouro}</p>
            <p>Endereço: ${dados.complemento}</p>
            <p>Endereço: ${dados.bairro}</p>
            <p>Endereço: ${dados.localidade}</p>
            <p>Endereço: ${dados.uf}</p>
            `
        }
    })
    .catch(error => console.log(error,"digite exatamente 8 numeros, sem caracteres especias, pontos ou virgulas"))
}

formulario.addEventListener("submit",buscarCEP)