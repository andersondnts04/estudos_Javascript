const produtos = [
    {nome:'fone', preco:25.00},
    {nome:'copo', preco:15.00},
    {nome:'caneta', preco:2.00},
    {nome:'chave philips', preco:7.00},
    {nome:'airsoft', preco: 200.00},
    {nome:'caixa de fosforo', preco:4.50}
]

const filtrar = produtos.filter(function(produto_loja){
    return produto_loja.preco > 7 || produto_loja.preco <= 2
})


const filtragem = produtos.filter(function(produto_loja1){
    return produto_loja1.nome.length > 4
      
  
})

console.log(filtrar)
console.log(filtragem)