function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const month = document.querySelector('#days');

  for (let dia of dezDaysList) {
    const dayListItem = document.createElement('li');
    dayListItem.classList.add('day');
    dayListItem.innerText = dia;
    if (dia === 4 || dia === 11 || dia === 18) {
      dayListItem.classList.add('friday');
    }
    else if (dia === 24 || dia === 31) {
      dayListItem.classList.add('holiday');
    }
    else if (dia === 25){
      dayListItem.className = 'day holiday friday'
    }

    month.appendChild(dayListItem);
  }
}
createDaysOfMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

/*function criaBotao (string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
criaBotao('Feriados');*/

function criaBotao (string) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  if (string === 'Sexta-Feira') {
    button.id = 'btn-friday';
  }
  else if (string === 'Feriados') {
    button.id = 'btn-holiday';
  }
  button.innerText = string;
  buttonsContainer.appendChild(button);
}
criaBotao('Feriados');
criaBotao('Sexta-Feira');


// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function mudaCorFeriado (button) {
  const feriados = document.querySelectorAll('.holiday');
  for (let dia of feriados) {
    
    if (dia.classList.contains('clicouHoliday')) {
      dia.classList.remove('clicouHoliday');
    }
    else {
      dia.classList.add('clicouHoliday');
    }
  }
}
const button = document.querySelector('#btn-holiday');
button.addEventListener('click', mudaCorFeriado);

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

//botões criados juntos no primeiro exercício.



// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function mudaCorFriday (button) {
  const friday = document.querySelectorAll('.friday');
  for (let dia of friday) {
    if (dia.classList.contains('clicouFriday')) {
      dia.classList.remove('clicouFriday');
    }
    else {
      dia.classList.add('clicouFriday');
    }
  }
  }
const button2 = document.querySelector('#btn-friday');
button2.addEventListener('click', mudaCorFriday);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica: https://developer.mozilla.org/en-US/docs/Web/API/Event/target


function zoomIn(element) {
    element.target.style.fontSize = '30px';
    element.target.style.fontWeight = '600';
  }

const days = document.querySelector('#days');
days.addEventListener('mouseover', zoomIn);

function zoomOut (element) {
  element.target.style.fontSize = '20px';
  element.target.style.fontWeight = '200';
}

days.addEventListener('mouseout', zoomOut);

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

const myTasks = document.querySelector('.my-tasks');

function task (taskName) {
  const task = document.createElement('span');
  task.innerText = taskName + '\n';
  myTasks.appendChild(task);
}



// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function taskColor (cor) {
  const color = document.createElement('div');
  color.classList.add('task');
  color.style.backgroundColor = cor;
  myTasks.appendChild(color);
}
taskColor('green');
task('cozinhar');
taskColor('red');
task('lavar louça');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selectTask (element) {
  const selectedTask = element.target;
  if (selectedTask.classList.contains('selected')) {
    selectedTask.classList.remove('selected');
  }
  else {
    selectedTask.classList.add('selected');
  }


}
const myTask = document.querySelectorAll('.task')[0];
const myTask2 = document.querySelectorAll('.task')[1];
myTask.addEventListener('click', selectTask);
myTask2.addEventListener('click', selectTask);

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();



// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica: https://www.w3schools.com/JSREF/event_key_key.asp 

function adicionaCompromisso (elemento) {
  const taskList = document.querySelector('.task-list');
  const taskInput = document.querySelector('#task-input');
  const listItem = document.createElement('li');

  listItem.innerText = taskInput.value;
  taskList.appendChild(listItem);
  taskInput.value = '';
}

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', adicionaCompromisso);