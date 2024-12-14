const carro = {
    marca:"ford",
    modelo:"ka",
    ano:"2020",
    cor:"prata",

    ligar: () => {
        console.log(`o carro ligou`)
    },
    acelerar: () =>{
        console.log(`o carro acelerou`)
    },
};

console.log(carro.marca);
console.log(carro);
carro.ligar();
carro.acelerar();