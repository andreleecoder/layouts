let listaDeCompras = {

    item: 'abacaxi',
    valor: 2.35,
    listar(i, v) {
        i = this.item
        v = this.valor
        return console.log(`O item ${i} custa ${v}`);

    }
}
listaDeCompras.listar()