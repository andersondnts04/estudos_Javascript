const Estoque = [
    {
        nome:"abacaxi",
        estoque:2000,
        preco:22.90,
    },
    {
        nome:"maçã",
        estoque:100,
        preco:5.00,
    },
]

const lista_nomes = Estoque.map(fruta_da_vez => fruta_da_vez.estoque)

const lista_frutas = Estoque.map(fruta_da_vez =>{
    return{
        nome: fruta_da_vez.nome , 
        preco: fruta_da_vez.preco,
    }
})

console.log(Estoque)
console.log(lista_nomes)
console.log(lista_frutas)
