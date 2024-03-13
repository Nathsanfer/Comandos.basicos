// Declaro uma variável A, cujo vai ser nosso número secreto 
// Ultilizo o ((Math.random() * 100).toFixed()) para gerar número aleatório
let a = ((Math.random() * 100).toFixed());
// Declaro uma variável B, cujo o número vai tentar acertar o número secreto
// Ultilizo o ((Math.random() * 100).toFixed()) para gerar número aleatório
let b = ((Math.random() * 100).toFixed());
// Declaro uma variável que contará a quantidade de tentativas 
let contagem = 1;

// Realizo o looping while/enquanto
while (!(b == a)) {
    if (b > a) {
        // Exibo as dicas
        console.log("O número secreto é menor que " + b);
        // Somo mais um ++
        contagem++;
    } else {
        // Exibo as dicas 
        console.log("O número secreto é maior que " + b);
    }
    // Caso o número secreto não seja achado, outro número será gerado 
    b = ((Math.random() * 100).toFixed());
}

// Caso o número secreto seja encontrado 
if (b == a) {
    // Exibo resultado 
    console.log("Você adivinhou o número secreto :)");
    console.log("O número secreto é: " + a);
}

// Exibo resultado da quantidade de tentativas realizadas  
console.log("Foram realizadas " + contagem + " tentativas");

