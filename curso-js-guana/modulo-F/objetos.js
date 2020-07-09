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
    /*let amigo = {
        nome: 'José',
        sexo: 'M',
        peso: 85,
        engordar(p) {
            console.log('engordou')
            this.peso += p


        }

    }
    amigo.engordar(2)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`);
    */