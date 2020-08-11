var dados = {
    nome: "André",
    sobrenome: "Lee",
    idade: 28,
    cidade: "Rio de janeiro",
};
dados.nomeCompleto = function() {
    return console.log(`${this.nome} ${this.sobrenome}`);
};
var n = dados.nomeCompleto();
var nome = "André";

console.log(nome.replace("ré", "rei"));