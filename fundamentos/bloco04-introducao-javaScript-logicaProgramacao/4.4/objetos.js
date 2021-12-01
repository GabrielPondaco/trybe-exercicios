


let player = {
  name: 'Martaz',
  lastName: 'Silvassauro',
  age: 44,
  medals: {
    golden: 5,
    silver: 6
  },
};
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");


player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018, 2019, 2020];
let vezes = 0;
for (let index in player.bestInTheWorld){
  vezes +=1;
}
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + vezes + " vezes");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata!");
