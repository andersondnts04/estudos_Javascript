const produtos = [
    {nome:'fone', preco:25.00},
    {nome:'copo', preco:15.00},
    {nome:'caneta', preco:2.00},
    {nome:'chave philips', preco:7.00},
    {nome:'airsoft', preco: 200.00},
    {nome:'caixa de fosforo', preco:4.50}
]


const percentual = 20
const preco_final = produtos.map((produto)=>{
    let porcen = (produto.preco*percentual)/100
    let preco_venda = produto.preco + porcen
    return {... produto, preco_venda}
})

console.log(preco_final)


