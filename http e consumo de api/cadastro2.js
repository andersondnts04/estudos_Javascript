const formulario = document.querySelector("#formulario")
const cep = document.querySelector("#cep")
const resultado = document.querySelector("#resultado")

function buscarCEP(e) {
    e.preventDefault()
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        if(dados.erro===true){
            resultado.textContent
        }else{
            resultado.innerHTML=`
            <p>CEP: ${dados.cep}</p>
            <p>Bairro: ${dados.bairro}</p>
            <p>Logradouro: ${dados.logradouro}</p>
            <p>Uf: ${dados.uf}</p>
            <p>complemento: ${dados.complemento}</p>
            `
        }
    })
    .catch(Error => {
        if(Error){
        alert`insira o CEP com 8 numero, sem traços, pontos ou caracteres especiais`
        }
    });    
}
formulario.addEventListener("submit", buscarCEP)