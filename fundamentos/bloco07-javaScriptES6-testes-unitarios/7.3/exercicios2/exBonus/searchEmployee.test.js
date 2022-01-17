// Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
const searchEmployee = require('./searchEmployee');

describe('testa função searchEmployee', () => {
  it('testa se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('testa se searchEmployee("", "firstNames") JOGA ERRO "Informação indisponível"', () => {
    expect(() => searchEmployee('1256-4', 'firstNames')).toThrow(Error);
    expect(() => searchEmployee('1256-4', 'firstNames')).toThrowError('Informação indisponível');
  });

  it('testa se searchEmployee("123456", "firstName") retorna "ID não identificada"', () => {
    expect(searchEmployee("123456", "firstName")).toBe('ID não identificada');
    expect(searchEmployee("lalalalalao", "firstName")).toBe('ID não identificada');
  });

  it('testa se searchEmployee("id válido", "detalhe válido") retorna informação esperada', () => {
    expect(searchEmployee("1256-4", "firstName")).toBe('Linda');
    expect(searchEmployee("9852-2-2", "specialities")).toEqual(['Ruby', 'SQL']);
    expect(searchEmployee("4456-4", "lastName")).toBe('Zuckerberg');
  })
});

