const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? 
// A primeira caixa tem a classe tech e em nosso style.css existe o seguinte código: .tech {
//   transform: translateY(-20px);
// } que move o objeto 20px a cima no eixo y;

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//os elementos já haviam sido recebidos lá em cima ó, depois foi só adicionar um listener pra cada um, que ao clicar chama a função mudaClasse
//para garantir que tenha apenas um com a classe tech, foi necessário procurar o elemento que havia a classe tech, e remover a classe dele antes de atribuir ao elemento que foi clicado.
function mudaClasse(elemento) {
  const techElement = document.querySelector('.tech')
  techElement.classList.remove('tech');
  elemento.target.classList.add('tech');
  input.value = '';
}
firstLi.addEventListener('click', mudaClasse);
secondLi.addEventListener('click', mudaClasse);
thirdLi.addEventListener('click', mudaClasse);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function mudaTexto (elemento) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = input.value;
}
input.addEventListener('keyup', mudaTexto);



// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

function redireciona() {
  window.open('https://gabrielpondaco.github.io/', '_blank')
}
myWebpage.addEventListener('dblclick', redireciona);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColorEnter(elemento) {
  elemento.target.style.color = 'black';
}
function changeColorLeave(elemento) {
  elemento.target.style.color = 'white';
}
myWebpage.addEventListener('mouseenter', changeColorEnter);
myWebpage.addEventListener('mouseleave', changeColorLeave);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  if (event.target.id === 'first-li') {
    event.target.innerText = 'Aqui está a primeira tecnologia que mais gostei.'
  }
  else if (event.target.id === 'second-li') {
    event.target.innerText = 'Aqui está a segunda tecnologia que mais gostei.'
  }
  else if (event.target.id === 'third-li') {
    event.target.innerText = 'Aqui está a terceira tecnologia que mais gostei.'
  }
  
  
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.