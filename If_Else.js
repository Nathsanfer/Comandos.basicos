// Calculando o IMC
// Declaro uma variével A de altura
let a = 1.58;
// Declaro uma variável P de peso 
let p = 72;
// Declaro uma variável com a operação 
let resultado = p / (a * a);

// Realizo as comparações com o if e else
// Exibo o resultado  
if (resultado < 18.5) {
    // Exibo resultado 
    console.log("Abaixo do peso");
} else if (resultado >= 18.5 && resultado < 24.9) {
    // Exibo resultado
    console.log("Peso normal");
} else if (resultado >= 24.9 && resultado < 29.9) {
    // Exibo resultado
    console.log("Sobrepeso");
} else {
    // Exibo resultado
    console.log("Obesidade");
}