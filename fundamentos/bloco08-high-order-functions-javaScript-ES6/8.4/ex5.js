const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  
  const string = names.reduce((acc, name) => `${acc} ${name}`).toLowerCase();
  const arrayLetters = string.split('');
  const count = arrayLetters.reduce((acc, curr) => {
    if (curr === 'a') {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};
//refatorando

// function containsA() {
//   return names
//   .reduce((acc, name) => `${acc} ${name}`).toLowerCase().split('')
//   .reduce((acc, curr) => curr === 'a' ? acc + 1 : acc , 0);
// };

console.log(containsA());
