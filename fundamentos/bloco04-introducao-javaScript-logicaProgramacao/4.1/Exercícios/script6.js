var pecaXadrez =  "raInHA";

pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez){
    case 'cavalo':
        console.log("anda em L");
        break;
    
    case 'bispo':
        console.log("nas diagonais");
        break;
    
    case 'rainha':
        console.log("pra onde quiser, manda em tudo");
        break;
    
    case 'rei':
        console.log("uma casa pra qualquer lado");
        break;
    
    case 'peao':
        console.log("só pa frente");
        break;

    case 'torre':
        console.log("só anda pros lado, quantas casa quiser");
        break;
    
    default:
        console.log("peça inválida");
}