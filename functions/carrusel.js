const carrusel=document.querySelector('.carrusel')
const items=document.querySelectorAll('.carrusel-item')
const anterior=document.querySelector('.anterior')
const siguiente=document.querySelector('.siguiente')
let posicion=0
function siguienteImagen(){if(posicion==0){posicion=-100
items.forEach((item)=>{item.style.transform=`translate(${posicion}%)`})}else if(posicion==-100){posicion=-200
items.forEach((item)=>{item.style.transform=`translate(${posicion}%)`})}else if(posicion==-200){posicion=0
items.forEach((item)=>{item.style.transform=`translate(${posicion}%)`})}}
function anteriorImagen(){if(posicion==0){posicion=-200
items.forEach((item)=>{item.style.transform=`translate(${posicion}%)`})}else if(posicion==-100){posicion=0
items.forEach((item)=>{item.style.transform=`translate(${posicion}%)`})}else if(posicion==-200){posicion=-100
items.forEach((item)=>{item.style.transform=`translate(${posicion}%)`})}}
setInterval(siguienteImagen,7000)
siguiente.addEventListener('click',siguienteImagen)
anterior.addEventListener('click',anteriorImagen)