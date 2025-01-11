fetch("https://viacep.com.br/ws/59031280/json/",{
    method: 'PATCH',
    headers: {
        'Content-type' : 'aplicaiton/json'
    },
    body: JSON.stringify({ nome: 'ANDERSON'})
})
.then(resposta=>resposta.json())
.then(dados=>console.log("Dados:", dados))
.catch(ERRO =>console.log(ERRO))