// Declaro as variáveis 
let a = 1;
let b = 100;
// Declaro variáveis que vai ser as extremidades
let inicio = 0;
let fim = 0;
// Declaro a que realizará a soma dos números  
let soma = 0;
// Declaro um contador de números 
let numimpares = 0;

// Realizo uma comparação para deixar o inicio sempre com o menor número
if (a >= b) {
    inicio = b;
    fim = a;
} else {
    inicio = a;
    fim = b;
}

// Realizo um looping com o for
// Declaro a variável i
for (let i = inicio; i <= fim; i++) {
    // Definira atravéz do reto de uma divisão se o número é par ou ímpar
    if (i % 2 !== 0) {
        // Somará mais um, ++, ao contador
        numimpares++;
        // Somo o número encontrado (i) com a soma
        soma += i;
    }
}

// Exibo os resultados
console.log("A quantidade de números ímpares é: " + numimpares);
console.log("A soma dos números ímpares é: " + soma);