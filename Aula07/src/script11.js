// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

alert("Idade em Dias");

let idadeAnos = parseInt(prompt("Informe a idade em anos: "));

let idadeMeses = parseInt(prompt("Informe a quantidade de meses: "));

let idadeDias = parseInt(prompt("Informe a quantidade de dias: "));

let idadeTotalDias = idadeAnos * 365 + idadeMeses * 30 + idadeDias;

alert("A idade de " + idadeAnos + " anos, " + idadeMeses + " meses e " + idadeDias + " dias equivale a " + idadeTotalDias + " dias.");