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

let soma_total = 0
/*for (let fruta_atual of estoque){
    soma_total += fruta_atual.preço
}*/

/* o forEach pecorre o objeto como um array, isso se chama iterar o array e depois soma o valor de soma total com o
valor do parametro do objeto iterado */

Estoque.forEach((fruta_atual)=>{
    soma_total += fruta_atual.preco
})

/* No exemplo fornecido, fruta_atual é o nome do parâmetro que você definiu na função de callback usada no método 
.forEach() do array Estoque. Ele representa cada elemento individual do array Estoque à medida que o método 
percorre o array.

Se Estoque é um array de objetos, por exemplo, contendo informações sobre frutas no estoque, 
cada fruta_atual será um objeto representando uma fruta.*/


Estoque.forEach((fruta_atual)=>{   
    if (fruta_atual.estoque <=100){
        console.log(`comprar mais ${fruta_atual.nome}`)
    }
})
Estoque.forEach((fruta_atual)=>{
    if (fruta_atual.nome.length >4){
        console.log(`${fruta_atual.nome}`)
    }
})
console.log(soma_total)

