var somaQuadrados = 0;
var quadradoSoma = 0;
var n = 10;


for (var index = 0; index <= n; index++){//soma Quadrados
    somaQuadrados = somaQuadrados + index**2;
    quadradoSoma = quadradoSoma + index;
}
quadradoSoma = quadradoSoma ** 2;

return quadradoSoma - somaQuadrados; 
