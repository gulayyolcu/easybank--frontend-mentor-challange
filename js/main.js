const closeBtn=document.querySelector('.close');
const menuNav=document.querySelector('nav .menu');

closeBtn.addEventListener('click',()=>{
        menuNav.classList.toggle('show');
});