const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  
  const string = names.reduce((acc, name) => `${acc} ${name}`).toLowerCase();
  const arrayLetters = string.split('');
  const count = arrayLetters.reduce((acc, curr) => {
    if (curr === 'b') {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
}

console.log(containsA());
