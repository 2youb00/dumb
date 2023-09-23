let yesbtn=document.getElementById('yesbtn');
let nobtn=document.getElementById('nobtn');

let h2=document.querySelector('h2');
let face=document.querySelector('.face');
let container = document.querySelector('.container');
let nobtnc=nobtn.getBoundingClientRect();
let containerc=container.getBoundingClientRect();










yesbtn.addEventListener('click',()=>{
h2.innerHTML='I knew it :)';
face.innerHTML='<i class="fa-solid fa-face-grin-squint-tears"></i>'
})



nobtn.addEventListener('mousemove', ()=>{
    let i =Math.floor(Math.random()*300)+50;
    let j =Math.floor(Math.random()*200)+200;
    console.log(j);
    nobtn.style.left=i+'px';
    nobtn.style.top=j+'px';
    })





 /*nobtn.addEventListener('mousemove', ()=>{
 let i =Math.floor(Math.random()*(containerc.width))-1;
 let j =Math.floor(Math.random()*(containerc.height))-1;
 nobtn.style.left=i+'px';
 nobtn.style.top=j+'px';
 })*/















//////////   <i class="fa-solid fa-face-grin-squint-tears"></i>