const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names
  .reduce((acc, name) => `${acc} ${name}`).toLowerCase().split('')
  .reduce((acc, curr) => curr === 'a' ? acc + 1 : acc , 0);
}

console.log(containsA());
