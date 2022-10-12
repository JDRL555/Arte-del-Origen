const btn=document.getElementById('btn')
const nav=document.getElementsByClassName('navegacion')
const puntos=[]
for(var i=0;i<6;i++){puntos.push(document.getElementById(`a${i + 1}`))}
btn.addEventListener('click',()=>{puntos.forEach(punto=>{if(punto.style.display=='none'){punto.style.display='block'}else{punto.style.display='none'}})})