var idade = 19;
naopossuidiabetes = true;
var podeBeber =
  idade >= 18 && naopossuidiabetes
    ? `Você tem ${idade} anos, pode beber`
    : `Você tem ${idade} anos, não pode beber`;
console.log(podeBeber);

// if else nao é necessário abrir e fachar chaves{} quando retornamos apenas uma linha de código
//exemplo

var possuiFaculdade = false;
if (possuiFaculdade) console.log('possui faculdade');
else console.log('Não possui faculdade');

//ou
if (possuiFaculdade) console.log('possui faculdade');
else console.log('Não possui faculdade');

//exercicios
//exc1
var scroll = 1000;
scroll += 500;
console.log(scroll);

//exc2
var possuiCarro = true;
var possuiCasa = true;

var darCredito = possuiCarro && possuiCasa;
console.log(darCredito);
