const myRemove = require('./myRemove');
const arr = [1, 2, 3, 4];
describe('testa função myRemove', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('verifica se myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('verifica se myRemove([1, 2, 3, 4], 3) não retorna o array', () => {
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('verifica se myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  })
})
