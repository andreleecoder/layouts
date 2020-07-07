function calcular() {
   let number = window.document.getElementById('txtn')
   let select= window.document.getElementById('seltab')
   
   if (number.value.length == 0) {
       window.alert("Por favor, preencha o campo vazio")
       
   }else{
    let n = Number(number.value)
    let c = 1
    select.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            select.appendChild(item)
            c++
            
        }
   }
    
}