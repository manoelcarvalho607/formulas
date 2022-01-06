
let tn1 = window.document.getElementById('txtn1')
let tn2 = window.document.getElementById('txtn2')
let tn3 = window.document.getElementById('txtn3')
let tn4 = window.document.getElementById('txtn4')
let tn5 = window.document.getElementById('txtn5')
let tn6 = window.document.getElementById('txtn6')
let tn7 = window.document.getElementById('txtn7')
let tn8 = window.document.getElementById('txtn8')



function somar(){
    if(tn1.value && tn2.value){
         var n1 = Number(tn1.value)
         var n2 = Number(tn2.value)
         var s = n1 + n2
         let res = window.document.getElementById('res')
         res.innerHTML = `O resultado da soma é  = <strong> ${s} </strong>`
         
    } else {
        window.alert('Digite um número')
    }

    tn1.value = ''
    tn2.value = ''
   
}

            
    
function subtrair(){
    if(tn3.value && tn4.value){
        var s1 = Number(tn3.value)
        var s2 = Number(tn4.value)
        var sub = s1 - s2 
        res.innerHTML = `O resultado da subtração é  = <strong> ${sub} </strong>`
    } else {
        window.alert('Digite um número')
    }
    tn3.value = ''
    tn4.value = ''
}

    
function multiplicacao(){
    if(tn5.value && tn6.value){
        var m1 = Number(tn5.value)
        var m2 = Number(tn6.value)
        var mult = m1 * m2 
        res.innerHTML = `O resultado da Multiplicação é = <strong> ${mult} </strong>`

    } else {
        window.alert('Digite um número')
    }
    tn5.value = ''
    tn6.value = ''
   
}


    
function divisao(){
    if(tn7.value && tn8.value){
        var d1 = Number(tn7.value)
        var d2 = Number(tn8.value)
        var div = d1 / d2 
        res.innerHTML = `O resultado da divisão é = <strong> ${div} </strong>`
    } else {
        window.alert('Digite um número')
    }
    tn7.value = ''
    tn8.value = ''
}

