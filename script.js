/**
//console.log("Olá mundo");
//console.log(25);
console.log(10+5);

const nome = "João"; //uma constante não pode ter seu valor alterado
console.log(nome);

let pontos = 30; //uma variável pode ter seu valor alterado
pontos=pontos+100;

console.log(`Olá, ${nome}, você tem ${pontos} pontos`);

console.log(typeof pontos); //typeof mostra o tipo da variável
console.log(typeof nome);

 */
/*
const nome = "Beatriz";
const idade = 30;
const curso = "Software Developer";


let inscrito = true;
if (inscrito) {
    console.log(`Olá, ${nome}, você tem ${idade} anos e está cursando ${curso}`);
}

let saldo = 100; //saldo é uma variável que pode ser alterada por isso usamos let
saldo = saldo + 50;
saldo = saldo - 20;

console.log(`Seu saldo é: ${saldo}`);

//Operadores matemáticos
let numero1 = 20;
let numero2 = 6;
console.log(`A soma de ${numero1} + ${numero2} é: ${numero1 + numero2}`);
console.log(`A subtração de ${numero1} - ${numero2} é: ${numero1 - numero2}`);
console.log(`A multiplicação de ${numero1} * ${numero2} é: ${numero1 * numero2}`);
console.log(`A divisão de ${numero1} / ${numero2} é: ${numero1 / numero2}`);
console.log(`O resto da divisão de ${numero1} % ${numero2} é: ${numero1 % numero2}`);
*/
/*
//if else
let nota = 200;
if (nota <= 9 && nota >= 0) {
    console.log("Reprovado ");
    } else if (nota >= 10 && nota <= 13) {
    console.log("Suficiente");
    } else if (nota >= 14 && nota <= 17) {
    console.log("Bom");
    } else if (nota >= 18 && nota <= 20){
    console.log("Excelente");
    } else {
    console.log("Nota inválida");
    }

//ciclo for

for (let i = 0; i <= 5; i++) {
    console.log(`O valor de i é: ${i}`);
}


//ciclo while
let j = 0;
while (j <= 5) {
    console.log(`O valor de j é: ${j}`);
    j++;
}   
*/
/*
for (let i = 0; i <= 10; i++) {
    console.log(`O valor de i é: ${i}`);
}

for (let j = 0; j <= 10; j++) {
    if (j % 2 === 0) {
        console.log(`O valor de j é: ${j} e é par`);
    } 
}

let soma = 0;
for (let k = 0; k <= 5; k++) {
    soma += k;
}
console.log(`A soma de 0 a 5 é: ${soma}`);
*/
/*
//Função
function calcularMedia(nota1, nota2) { // functio nome da função(parâmetros)
    return (nota1 + nota2) / 2; // return retorna o valor da função
}
const media=calcularMedia(14, 18);// chamando a função e passando os parâmetros e armazenando o valor retornado na variável media

console.log(`A média é: ${media}`);

*/
/*
function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }   
}

par=ehPar(8);
console.log(`O número é par? ${par}`);

par=ehPar(7);
console.log(`O número é par? ${par}`);


function calcularDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}


desconto=calcularDesconto(100, 10);
console.log(`O valor com desconto é: ${desconto}`);
*/

const nome="Beatriz";
const notaTeste=18;
const notaTrabalho=16;
 function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}
media=calcularMedia(notaTeste, notaTrabalho);
console.log(`A média é: ${media}`);


if (media <= 9 && media >= 0) {
    console.log("Reprovado ");
    } else if (media >= 10 && media <= 13) {
    console.log("Suficiente");
    } else if (media >= 14 && media <= 17) {
    console.log("Bom");
    } else if (media >= 18 && media <= 20){
    console.log("Excelente");
    } else {
    console.log("Nota inválida");
    }
function Mathfloor(numero) {
    return Math.floor(numero);
}

mediaArredondada=Mathfloor(media); 

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${mediaArredondada} = ${i * mediaArredondada}`);
}   