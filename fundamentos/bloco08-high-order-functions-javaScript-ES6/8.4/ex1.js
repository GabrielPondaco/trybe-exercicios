const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let array2 = [];
  array2 = arrays.reduce((array1, array2) => array1.concat(array2));
  return array2;
}
console.log(flatten());

//refatorando
function flatten() {
  return arrays.reduce((array1, array2) => array1.concat(array2));
};
console.log(flatten());
