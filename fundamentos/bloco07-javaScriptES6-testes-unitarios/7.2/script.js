// const obj = (par1, par2, par3) => {
//   let par1 = {};
//   par1.par2 = 'par3';
//   return par1
// };
// console.log(obj(pessoa, nome, rosania));



// const pessoa = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// const mudaObj = (obj, key, value) => {
//   obj[key] = value;
//   return obj;
// };

// console.log(mudaObj(pessoa, xablau, 'Gabrielzinho'));
const verificar = (value1, value2) => {
  if (value1.length <= 0 || value2.length <= 0) {
    throw new Error('Tem que ser números')
  }
}
const sum = () => {
  try {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
    verificar(value1, value2);
  const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;

  } catch (error){
    document.getElementById('result').innerHTML = `Erro: ${error.message}`
  }
  finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);}  