import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const Conteudo = (value) => {
  return (
    <li className='itemList'>{`O conteúdo é: ${value.conteudo}`} <br />
    {`Status: ${value.status} `} <br />
    {`Bloco: ${value.bloco}`} <hr /></li>
  );
}
 



class Content extends Component {
  render() {
    return <ol className='list'>{ conteudos.map((conteudo) => Conteudo(conteudo))}</ol>
  }
}

export default Content;