 var check = window.document.getElementById('verificar')
 check.addEventListener('click',verificar)

 function verificar (){
  var data = new Date()
  var ano = data.getFullYear()
  var fAno = document.querySelector('input#txtano')
  var res = document.querySelector('div#res')
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('verifique os dados e tente novamente')
    
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img') 
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'

       if(idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', './img/bebe-homem.jpg')
      }else if (idade < 21) {
        //jovem
        img.setAttribute('src', './img/jovem-homem.jpg')
      }else if (idade < 60) {
        //adulto
        img.setAttribute('src', './img/homem.jpg')
      }else{
        //idoso
        img.setAttribute('src', './img/idoso.jpg')
      }
    }
    else if(fsex[1].checked){
      genero = 'mulher'

       if (idade >= 0 && idade < 10){
        //criança
        img.setAttribute('src', './img/bebe-mulher.jpg')
      }else if (idade < 21) {
        //jovem
        img.setAttribute('src', './img/jovem-mulher.jpg')
      }else if (idade < 60) {
        //adulto
        img.setAttribute('src', './img/mulher.jpg')
      }else{
        //idoso
        img.setAttribute('src', './img/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img) 
  }
  
}