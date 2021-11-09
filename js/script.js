let titulo = document.querySelector('h1')

titulo.addEventListener('mouseover', colorChange);

function colorChange(event) {
  titulo.style.color = 'tomato';
}


titulo.addEventListener('mouseout', (evento) => {
  titulo.style.color = 'black';
})

let nome = document.querySelector('#name')
let paragraph = document.querySelector('#descricao')
let figura = document.querySelector('#imagem');
let btn = document.querySelector('#enviar')


let newName = document.querySelector('h2')
let newParagraph = document.querySelector('p')
let newImage = document.querySelector('img')


btn.addEventListener('click', (event) => {
  console.log("clicou no trem")

  event.preventDefault();

  newName.innerHTML = `${nome.value}`;
  newParagraph.innerHTML = `${paragraph.value}`;
  newImage.src = `${figura.value}`;
})