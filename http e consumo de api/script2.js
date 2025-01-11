fetch("https://viacep.com.br/ws/59031280/json/")
.then(resposta=>resposta.json())
.then(dados=>console.log("Dados:", dados))
.catch(ERRO =>console.log(ERRO, "Por favor insira o cep sem traço, espaços, ou pontos e com apenas 8 numeros."))