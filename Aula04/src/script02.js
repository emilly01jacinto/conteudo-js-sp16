// Operadores de Comparação

// Operador Comparador de Igualdade
let a = 5;

let comparadorIgualdade1 = (a == 5);
let comparadorIgualdade2 = (a == 8);
let comparadorIgualdade3 = (a == "5");

console.log(comparadorIgualdade1);
console.log(comparadorIgualdade2);
console.log(comparadorIgualdade3);

console.log("");

// Operador Comparador de Igualdade e Tipo
let comparadorIgualdadeTipo1 = (a === 5);
let comparadorIgualdadeTipo2 = (a === 8);
let comparadorIgualdadeTipo3 = (a === "5");

console.log(comparadorIgualdade1);
console.log(comparadorIgualdade2);
console.log(comparadorIgualdade3);

console.log("");

// Operador Comparador de Diferença
let comparadorDiferença1 = (a != 5);
let comparadorDiferença2 = (a != 8);
let comparadorDiferença3 = (a != "5");

console.log(comparadorDiferença1);
console.log(comparadorDiferença2);
console.log(comparadorDiferença3);

console.log("");

// Operador Comparador de Diferença entre Tipo e Valor
let comparadorDiferençaTipoValor1 = (a !== 5);
let comparadorDiferençaTipoValor2 = (a !== 8);
let comparadorDiferençaTipoValor3 = (a !== "5");

console.log(comparadorDiferençaTipoValor1);
console.log(comparadorDiferençaTipoValor2);
console.log(comparadorDiferençaTipoValor3);

console.log("");

// Operador Comparador Maior Que
let comparadorMaiorQue1 = (a > 5);
let comparadorMaiorQue2 = (a > 8);
let comparadorMaiorQue3 = (a > 3);

console.log(comparadorMaiorQue1);
console.log(comparadorMaiorQue2);
console.log(comparadorMaiorQue3);

console.log("");

// Operador Comparador Menor Que
let comparadorMenorQue1 = (a < 5);
let comparadorMenorQue2 = (a < 8);
let comparadorMenorQue3 = (a < 3);

console.log(comparadorMenorQue1);
console.log(comparadorMenorQue2);
console.log(comparadorMenorQue3);

console.log("");

// Operador Comparador Maior ou Igual Que
let comparadorMaiorIgualQue1 = (a >= 5);
let comparadorMaiorIgualQue2 = (a >= 8);
let comparadorMaiorIgualQue3 = (a >= 3);

console.log(comparadorMaiorIgualQue1);
console.log(comparadorMaiorIgualQue2);
console.log(comparadorMaiorIgualQue3);

console.log("");

// Operador Comparador Menor ou Menor Que
let comparadorMenorIgual1Que1 = (a <= 5);
let comparadorMenorIgual1Que2 = (a <= 8);
let comparadorMenorIgual1Que3 = (a <= 3);

console.log(comparadorMaiorIgualQue1);
console.log(comparadorMaiorIgualQue2);
console.log(comparadorMaiorIgualQue3);

console.log("");

// Operador Comparador em Estrutura Condicional
let idade = 13;
let mensagem;

if (idade < 18){
    mensagem = "Você é menor de idade!";
    console.log(mensagem);
}