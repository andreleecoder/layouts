let item = document.getElementById('item');
let videogame = ['xbox', 'switch', 'ps4'];
videogame.push('3ds');
for (var i = 0; i < videogame.length; i++) {
  let e = document.createElement('p');
  e.text = ` modelo ${videogame[i]}`;
  item.appendChild(e);
}
//foreach
let carros = ['sandero', 'onix', 'chevete'];
carros.forEach((itens, index) => {
  console.log(itens, index);
});
