const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra Pondaco'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  }
  return employees;
};

const createEmail = (name) => ({ nome: name, email: `${name.toLowerCase().split(' ').join('_')}@betrybe.com` });

console.log(Object.values(newEmployees()));