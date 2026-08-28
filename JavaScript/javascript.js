// Aqui seleciona a classe no html
const button = document.querySelector('.menu-mobile');
const nav = document.querySelector('nav');

// Aqui dentro vai o que acotece quando clicar (abrir e fechar)
function AbrirMenu(){
    nav.classList.toggle('menu-aberto');
    
}
button.addEventListener('click', AbrirMenu);