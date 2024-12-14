const produtos = [
    {nome:'fone', preco:25.00},
    {nome:'copo', preco:15.00},
    {nome:'caneta', preco:2.00},
    {nome:'chave philips', preco:7.00},
    {nome:'airsoft', preco: 200.00},
    {nome:'caixa de fosforo', preco:4.50}
]

let soma = 0

produtos.forEach((produtos_atual)=>{
         soma += produtos_atual.preco
})

console.log(soma.toFixed(2))
