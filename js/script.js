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
let btn = document.querySelector('#enviar')

let newName = document.querySelector('h2')
let NewParagraph = document.querySelector('p')


btn.addEventListener('click', (Event) => {
  console.log("clicou no trem")

  Event.preventDefault();

  newName.innerHTML = `${nome.value}`;
  NewParagraph.innerHTML = `${paragraph.value}`;



})

