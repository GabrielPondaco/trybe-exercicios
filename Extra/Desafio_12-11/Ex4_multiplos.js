var soma = 0;
    for (var index = 0; index < roof; index++){
        if ((index%3==0) || (index%5==0)){
            soma = soma + index;
        }
    }
    return soma;