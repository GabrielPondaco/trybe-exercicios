const obj = (par1, par2, par3) => {
  let par1 = {};
  par1.par2 = 'par3';
  return par1
};
console.log(obj(pessoa, nome, rosania));



const pessoa = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const mudaObj = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

console.log(mudaObj(pessoa, xablau, 'Gabrielzinho'));