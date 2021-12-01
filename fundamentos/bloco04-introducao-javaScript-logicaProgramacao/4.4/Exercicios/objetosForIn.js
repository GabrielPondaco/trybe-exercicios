let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};


console.log("Bem-vinda, " + info.personagem);

info['recorrente'] = 'Sim';

console.log(info);
console.log(info2);
for (let key in info){
  
  console.log(key + " : " + info[key]);
}

for (let key in info){
  if (key != 'recorrente'){
    console.log(info[key] + " e " + info2[key]);
  }
  else if (info[key] === info2[key]){
    console.log("Ambos recorrentes");
  }
  
}

// -----------------------------------------------------------------------
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos[1]= {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}

console.log("O livro favorito de "+ leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

let livros = 0;
for (let favoritos in leitor.livrosFavoritos){
  livros += 1;
}
console.log(leitor.nome + " tem " + livros + " livros favoritos");
