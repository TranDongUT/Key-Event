const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const key = $('.content-key');
const keyLocation = $('.content-location');
const which = $('.content-which');
const code = $('.content-code');
const circle = $('.circle');


document.addEventListener('keydown',(e)=>{
    key.innerText = e.key;
    keyLocation.innerText = e.location;
    which.innerText = e.which;
    code.innerText = e.code;
    circle.innerText = e.which;
    circle.animate([
        {boxShadow: '0px 20px 50px rgb(240 240 240)'}
    ],{duration: 500})
})