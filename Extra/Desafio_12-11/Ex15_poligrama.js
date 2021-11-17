
    // Write your code here
    var word = "bbabab";
    var word1 = ""; //raiz
    var word1Array = [];
    var word2 = "";
    var word2Array = [];
    var metade = 0;
    if (word.length%2 == 0)
    {
        
        metade = word.length/2;
        word1 = word.slice(0,metade);
        word1Array = word1.split("");
        word1Array.sort();
        word2 = word.slice(metade, word.length);
        word2Array = word2.split("");
        word2Array.sort();
        if (word1Array.toString() == word2Array.toString())
        {
            return word1;
        }
    }
    return "";
    
