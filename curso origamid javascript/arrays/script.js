/*
let item = document.getElementById('item');
let videogame = ['xbox', 'switch', 'ps4'];
for (var i = 0; i < videogame.length; i++) {
  let e = document.createElement('p');
  e.innerText = ` ${videogame[i]}`;
  item.appendChild(e);
}
//foreach
let carros = ['sandero', 'onix', 'chevete', 'celta'];
carros.forEach((itens, index) => {
  let e = document.createElement('p');
  e.innerText = ` ${itens} numero ${index}`;
  item.appendChild(e);
});

*/
/*brasilCampeao = [1959, 1964, 1970, 1994, 2002];

brasilCampeao.forEach((element) => {
  console.log(`O Brasil ganhou a copa de ${element}`);
});*/
var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia'];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'pera') {
    break;
  }
}
ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
