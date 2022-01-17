// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
const myFizzBuzz = require('./myFizzBuzz');

describe('testa função myFizzBuzz', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it('verifica se retorno de myFizzBuzz(15) é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it('verifica se retorno de myFizzBuzz(3) é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it('verifica se retorno de myFizzBuzz(5) é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it('verifica se retorno de myFizzBuzz(2) é o esperado', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  it('verifica se retorno de myFizzBuzz("a") é o esperado', () => {
    expect(myFizzBuzz('a')).toBe(false);
  })
})
