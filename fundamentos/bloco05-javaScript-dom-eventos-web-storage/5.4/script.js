window.onload = function() {
  
  const btn = document.querySelector('#trocaDiv1');
  const btn2 = document.querySelector('#trocaDiv2');
  //const p2 = document.querySelector('#p2');
  const colorPicker = document.querySelector('#colorpicker');
  const div1 = document.querySelector('#div1');
  const div2 = document.querySelector('#div2');
  div1.style.backgroundColor = localStorage.getItem('div1Color');
  div2.style.backgroundColor = localStorage.getItem('div2Color');
  const btn3 = document.querySelector('#criaQuadrados');


  function trocaDiv1() {
    const cor = colorPicker.value;
    
    div1.style.backgroundColor = cor;
    localStorage.setItem('div1Color', cor);
  }
  
  function trocaDiv2() {
    const cor = colorPicker.value;
    div2.style.backgroundColor = cor;
    localStorage.setItem('div2Color', cor);
  }
  
  btn.addEventListener('click', trocaDiv1);
  btn2.addEventListener('click', trocaDiv2);

}

/*function setDayColor() {
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

setDayColor();*/
const quadrados = document.querySelector('#quadrados');
function createBox() {
  let box = document.createElement("div");
  box.classList.add('box');
  quadrados.appendChild(box);
}



btn3.addEventListener('click', createBox());
