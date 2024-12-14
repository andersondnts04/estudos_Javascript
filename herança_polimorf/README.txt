Polimorfismo
O conceito de polimorfismo na programação orientada a objetos refere-se à capacidade de objetos diferentes responderem ao 
mesmo método de maneiras diferentes. Isso permite que métodos com o mesmo nome em classes diferentes tenham comportamentos
específicos de acordo com a classe onde estão implementados.

ex:

class animal{
    constructor(especie ,nome, raca, peso, cor){
        this.especie = especie
        this.nome = nome
        this.raca = raca
        this.peso = peso
        this.cor = cor
    }
    emitirSom(){
        return `O animal da epescie ${this.especie} emitiu som`
    }
}

class cachorro extends animal{
    constructor(especie, nome, raca, peso, cor){
        super(especie,nome, raca, peso, cor)
    }
    emitirSom(){
        return `O cachorro latiu`
    }
}

veja que o metood pode ser retornado de varias formas


Herança
A herança é o mecanismo pelo qual uma classe filha (ou derivada) herda atributos e métodos de uma classe pai (ou classe base).
Isso significa que a classe filha pode reutilizar ou sobrescrever os métodos e atributos da classe pai.

No seu exemplo, faltou um pouco de precisão. Um constructor não é herdado diretamente pela classe filha. 
O que acontece é que a classe filha pode chamar o constructor da classe pai utilizando a palavra-chave super.

ex: 


// Classe Pai
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log("Som genérico de um animal.");
    }

    info() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }
}

// Classe Filha: Cachorro
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade); // Chama o constructor da classe pai
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} diz: Au au!`);
    }

    info() {
        super.info(); // Chama o método da classe pai
        console.log(`Raça: ${this.raca}`);
    }
}

// Classe Filha: Gato
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade); // Chama o constructor da classe pai
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} diz: Miau!`);
    }

    info() {
        super.info(); // Chama o método da classe pai
        console.log(`Cor: ${this.cor}`);
    }
}

// Criando instâncias e testando a herança
const cachorro = new Cachorro("Rex", 3, "Pastor Alemão");
const gato = new Gato("Mimi", 2, "Branco");

// Testando métodos herdados e sobrescritos
cachorro.emitirSom(); // Saída: "Rex diz: Au au!"
cachorro.info();      // Saída: "Rex tem 3 anos. Raça: Pastor Alemão"

gato.emitirSom();     // Saída: "Mimi diz: Miau!"
gato.info();          // Saída: "Mimi tem 2 anos. Cor: Branco"