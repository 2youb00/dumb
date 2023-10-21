let yesbtn=document.getElementById('yesbtn');
let nobtn=document.getElementById('nobtn');

let h2=document.querySelector('h2');
let face=document.querySelector('.face');
let container = document.querySelector('.container');
let nobtnc=nobtn.getBoundingClientRect();
let containerc=container.getBoundingClientRect();

/***------------------------chang lang----------------- */
let input1 = document.getElementById('value-1');
let input2 = document.getElementById('value-2');
document.addEventListener('change', function(event) {
    if (event.target === input2) {
        changeContentToArabic();
    } else if (event.target === input1) {
        changeContentToenglish();
    }
});

function changeContentToArabic() {
  h2.innerHTML='هل انت غبي ؟';
  yesbtn.innerHTML='نعم';
  nobtn.innerHTML='لا';
}
function changeContentToenglish() {
    h2.innerHTML='Are you dumb ?';
    yesbtn.innerHTML='Yes';
    nobtn.innerHTML='No';
}
;









yesbtn.addEventListener('click',()=>{
    if(input2.checked) {
        h2.innerHTML=' باينة من وجة';
        face.innerHTML='<i class="fa-solid fa-face-grin-squint-tears"></i>';
    }
    else{
        h2.innerHTML='I knew it :)';
        face.innerHTML='<i class="fa-solid fa-face-grin-squint-tears"></i>';
    }
})




nobtn.addEventListener('mousemove', function test(){
    
    let i =Math.floor(Math.random()*1000);
    

    let j =Math.floor(Math.random()*1000);
    if(containerc.right >(i+130) && containerc.left<i && containerc.bottom>(j+130)   && containerc.top<j ){
        console.log("i:",i,"j:",j);
    nobtn.style.left=i+'px';
    nobtn.style.top=j+'px';}
    else{
        console.log('else');
   test();
    }
    })



 /*nobtn.addEventListener('mousemove', ()=>{
 let i =Math.floor(Math.random()*(containerc.width))-1;
 let j =Math.floor(Math.random()*(containerc.height))-1;
 nobtn.style.left=i+'px';
 nobtn.style.top=j+'px';
 && containerc.height>(containerc.top+j)
 && i<containerc.right-100
 && container.top &&








   let i =Math.floor(Math.random()*1000);
    

    let j =Math.floor(Math.random()*1000);
    if(containerc.width>(containerc.left+i) && containerc.height>(containerc.top+j)){
        console.log(j);
    nobtn.style.left=containerc.left+i+'px';
    nobtn.style.top=containerc.top+j+'px';}
    else{
        console.log('else');
   test();
    }
    })
 })*/















//////////   <i class="fa-solid fa-face-grin-squint-tears"></i>
