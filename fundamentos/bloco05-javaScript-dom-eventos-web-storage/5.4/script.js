window.onload = function() {
  
  const btn = document.querySelector('#trocaDiv1');
  const btn2 = document.querySelector('#trocaDiv2');
  //const p2 = document.querySelector('#p2');
  const colorPicker = document.querySelector('#colorpicker');
  const div1 = document.querySelector('#div1');
  const div2 = document.querySelector('#div2');
  div1.style.backgroundColor = localStorage.getItem('div1Color');
  div2.style.backgroundColor = localStorage.getItem('div2Color');
  
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