// Declaro as variavéis 
let inicio = 30;
let fim = 20;

// Realizo as comparações com if
if (inicio < fim) {
    while (inicio < fim) {
        // Exibo o resultado 
        console.log(inicio);
        // Somo mais um ++
        inicio++;
    }
} if (fim <= inicio) {
    while (fim <= inicio) {
        // Exibo o resultado 
        console.log(fim);
        // Somo mais um ++
        fim++;
    }
}

//While deve estar dentro de um bloco, nesse caso temos 2 blocos 
// Exibo o resultado 
console.log("Terminou");