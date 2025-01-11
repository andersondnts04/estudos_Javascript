let soma = 0
let quant_notas = 0
while(true){
        const nota = Number(prompt("digite sua nota: "))
    if(nota>11){
        alert(`valor inválido`)
    }else if(nota===11){
        break
    }else{
        soma += nota
        quant_notas++
    }
}
const media = soma/quant_notas

if(media>7){
    alert(`você passou sua media foi: ${media.toFixed(1)}`)
}else{
    alert(`você reprovou sua media foi: ${media.toFixed(1)}`)
}


