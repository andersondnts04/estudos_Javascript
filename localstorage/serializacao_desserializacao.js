const dados = '{"nome":"anderson", "idade":27}'
const dados_convertidos = JSON.parse(dados)


console.log(dados_convertidos)

const transformados_em_string = JSON.stringify(dados)

console.log(transformados_em_string)

//assim esta convertido o objeto para json utilizando o metodo parse, como neste exemplo JSON.parse