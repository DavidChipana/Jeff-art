

const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('hojas');


window.onscroll = ( ) => {
    const anchoFondo = (window.pageYOffset / altura) *300;
    fondo.style.width = anchoFondo + '%';
}

