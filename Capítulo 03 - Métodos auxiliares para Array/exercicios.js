// ## Exercício 1 - Par ou ímpar?
// Altere o código a seguir para utilizar o método `forEach` de modo que a saída permaneça a mesma.

// ``` javascript
// var numeros = [0,1,2,3,4,5];
// for(var i = 0; i<= numeros.length; i++) {
//     if(i % 2 === 0) {
//         console.log(i + ' é par');
//     } else {
//         console.log(i + ' é ímpar');
//     }
// }

var numeros = [0,1,2,3,4,5];
numeros.forEach(function(numero){
  if(numero % 2 === 0) {
    console.log(numero + " é par");
  } else {
    console.log(numero + " é ímpar");
  }
});

// ## Exercício 2 - Quero o dobro
// Utilizando o método `map`, escreva o método `dobrar` que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.

// * Exemplo: dobrar([1,2,3]) → [2,4,6]

var array = [1,2,3];
function dobrar(array) {
  return array.map(function(item) {
    return item * 2;
  });
}

dobrar(array);

// ## Exercício 3 - NÃO ESTOU BRAVO
// Escreva o método `caps` que recebe um array de strings e retorna um outro array com todas as strings do array original em CAIXA ALTA.

// * Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']

var array = ['oi', 'tudo', 'bem'];
function caps(array) {
  return array.map(function(item) {
    return item.toUpperCase();
  })
}

caps(array);

// ## Exercício 4 - Equilibrio de parênteses
// Utilizando a função auxiliar `reduce`, escreva uma função chamada `validaParenteses` que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma `string` e retornar um valor booleano (true ou false).

// * Exemplo: validaParenteses(“)((()()())))”); →  false
// * Exemplo: “()()()”, “(())” → true
// * Exemplo: “)(”, “())” → true

