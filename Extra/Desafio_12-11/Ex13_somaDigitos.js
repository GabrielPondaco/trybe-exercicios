    var number_s = 26;
    var soma = 0;
    var quantidade = 0;
    var numero = 0;
    for (let index = 0; index < 1000; index++)
    {
        soma = 0;
        numero = index;
        numero = Array.from(String(numero), Number);
        for (let index2 = 0; index2 < numero.length; index2++){
            soma = soma + numero[index2];  
        }
        if (soma == number_s)
        {
            quantidade++;
        }
    }
    console.log(quantidade);