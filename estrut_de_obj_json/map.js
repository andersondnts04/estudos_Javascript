const produtos = [
    {nome:'fone', preco:25.00},
    {nome:'copo', preco:15.00},
    {nome:'caneta', preco:2.00},
    {nome:'chave philips', preco:7.00},
    {nome:'airsoft', preco: 200.00},
    {nome:'caixa de fosforo', preco:4.50}
]

const processar = produtos.map(function(produto_atual){
    if(produto_atual.preco>10){
       return produto_atual.nome
    }
})
const multiplicar = produtos.map(function(produto_atual){
   return produto_atual.preco *(10/100) + produto_atual.preco
})
console.log(processar)
console.log(multiplicar)