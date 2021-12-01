let word = 'tryber';
let wordReversed = [];
for (let index = 1 ; index <= word.length ; index +=1){
    wordReversed[index-1] = word[word.length-index];
}

console.log(word);
console.log(wordReversed.join(''));