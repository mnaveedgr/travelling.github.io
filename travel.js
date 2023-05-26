let navbar=document.querySelector('.navbar');
let menu= document.querySelector('#menu');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
     navbar.classList.remove('active');
}
AOS.init({
    duration: 400,
    delay: 200,
 });