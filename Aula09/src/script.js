// Funções

let novoCarro = "Fusca";

function exibirCarro(){
    let novoCarro = "Opala";
}

console.log(novoCarro);
exibirCarro();

console.log("");

// Função com 4 parâmentros
function saudacao(nome, sobrenome, idade, altura){

    let saudacaoMensagem = `Olá, eu me chamo ${nome} ${sobrenome}, tenho ${idade} anos de idade e ${altura}m de altura.`;

    return saudacaoMensagem;
}

console.log(saudacao("Emilly", "Jacinto", 22, 1,73));

console.log("");

// Função com 1 parâmetro
function paraCelsius(grausFahrenheit){

    let grausCelsius = (5 / 9) * (grausFahrenheit - 32);

    let mensagemRetorno = `${grausFahrenheit}° Fahrenheit em Celsius é igual a: ${grausCelsius}°C`;

    return mensagemRetorno;
}

let grausFahrenheit = 212;
// let grausFahrenheit = parseFloat(prompt(`Imforme um valor de temperaturaem Fahrenheit para converter em Celsius:`));

const elementoh3 = document.querySelector(".ex1");

elementoh3,innerHTML = paraCelsius(grausFahrenheit)
elementoh3.style.fontFamily = "sans-serif";

console.log("");

// Valor padrão para parâmetro
function soma(a = 1, b = 2){
    return a + b;
}

console.log(soma(10, 4));
console.log(soma(4));
console.log(soma());

console.log("");

// Utilizano valor retornado de função em uma expressão matemática

function multiplicar(a, b){
    return a * b;
}

let resultadoExpressao = multiplicar(5, 10) / 2;

console.log(resultadoExpressao);

console.log("");

// Utilizando dois retornos em uma função
function subtracao(a, b){
    
    return"Só os loucos sabem.";

    return a - b;

}

let resultado = subtracao(10, 5);
console.log(resultado);

console.log("");

// Utilizando return para finalizar execução utilizando condição lógica 
function verificarIdade(Idade){
    if (idade < 18){
        return "Você é menor de idade.";
    }
    return "Você é maior de idade.";
}

let resultado2 = verificarIdade(16);

console.log(resultado2);
