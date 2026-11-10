// Trapézio

alert("Área do Trapézio");

let baseMaiorTrapezio = parseFloat(prompt("Informe o valor da base maior do trapézio em centímetros: "));

let baseMenorTrapezio = parseFloat(prompt("Informe o valor da base menor do trapézio em centímetros: "));

let alturaTrapezio = parseFloat(prompt("Informe o valor da altura do trapézio em centímetros: "));

let areaTrapezio = (baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapezio / 2;

alert("A área do trapézio é: " + areaTrapezio + "cm²");