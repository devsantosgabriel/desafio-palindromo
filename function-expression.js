//Faça um programa que identifique se uma palavra é um palindromo ou se a palavra não é um palindromo.
//Palindromo são palavras que escritas de trás para frente permanecem a mesma palavra.
//Para essa atividade você deverá usar função e métodos de string para manipular a palavra.


const verSePalavraEPalindromo = function(palavra){
    let separandoPalavra = palavra.split("");
    let palavraInvertida = separandoPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo!`);
    }else{
        console.log(`A palavra ${palavra} não é um palíndromo!`);
    };
};

verSePalavraEPalindromo('radar');

//Em function expression não é permitido fazer hoisting, ou seja, não é permitido chamar a função antes dela ser declarada

