 var count = document.querySelector('input#count')
 count.addEventListener('click', contar)

 function contar() {
     var start = document.getElementById('start')
     var inicio = Number(start.value)
     var end = document.getElementById('end')
     var fim = Number(end.value)
     var step = document.getElementById('step')
     var passo = Number(step.value)
     var result = document.getElementById('result')
     var span = document.createElement('span')

     if (inicio == '' || fim == '' || passo == '') {
         window.alert('nao vai rolar bebê :(')

     } else if (passo == 0) {
         window.alert('passo 0')
     } else {
         for (inicio; inicio <= fim; inicio = inicio * step) {
             result.innerHTML

         }


     }


 }