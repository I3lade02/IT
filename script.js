document.write("<h1>Hello</h1>");

let salku = 5;
let dni = 2.5;

let vypito = salku * dni;
let typ = "Presso" + " s mlékem";

document.write(`Vypil jsi ${vypito} šálků kávy typu ${typ}`);

document.write("<br />");

let vstup = prompt("Zadej číslo pro zdvojnásobení: ");
let a = parseInt(vstup);
a *= 2;
document.write(a);

document.write("<br>");


//kalklačka
let vstup1 = parseInt(prompt("Zadej první číslo: "));
let vstup2 = parseInt(prompt("Zadej druhé číslo: "));
document.write("Já teď provedu základní operace => +, -, /, *" + "<br>");
document.write(
    `Součet je: ${vstup1 + vstup2}` + "<br>" +
    `Rozdíl je: ${vstup1 - vstup2}` + "<br>" +
    `Podíl je: ${vstup1 / vstup2}` + "<br>" + 
    `Součin je: ${vstup1 * vstup2}` + "<br>"       
);