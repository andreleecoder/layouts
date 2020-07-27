var dados = {
    nome: "André",
    sobrenome: "Lee",
    idade: 28,
    cidade: "Rio de janeiro",
};
dados.nomeCompleto = function() {
    return console.log(`${this.nome} ${this.sobrenome}`);
};
var n = dados.nomeCompleto()

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}
carro.preco = 3000
console.log(carro)
var cachorro = {
    raca: 'labraqdor',
    cor: 'preto',
    idade: 10,

    latir(pessoa) {
        return pessoa == 'homem' ? console.log('au au au') : console.log('...')
    }
}
console.log(cachorro.latir('mulher'));