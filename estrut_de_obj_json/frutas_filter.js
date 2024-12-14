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


const lista_frutas = Estoque.filter(fruta_da_vez => fruta_da_vez.preco >=10)
console.log(lista_frutas)
