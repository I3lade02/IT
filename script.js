// document.write("<h1>Hello</h1>");

// let salku = 5;
// let dni = 2.5;

// let vypito = salku * dni;
// let typ = "Presso" + " s mlékem";

// document.write(`Vypil jsi ${vypito} šálků kávy typu ${typ}` + "<br>");
// document.write("------------------------");
// document.write("<br />");

// let vstup = prompt("Zadej číslo pro zdvojnásobení: ");
// let a = parseInt(vstup);
// a *= 2;
// document.write(a + "<br>");

// document.write("------------------------" + "<br>");


// //kalklačka
// let vstup1 = parseInt(prompt("Zadej první číslo: "));
// let vstup2 = parseInt(prompt("Zadej druhé číslo: "));
// document.write("Já teď provedu základní operace => +, -, /, *" + "<br>");
// document.write(
//     `Součet je: ${vstup1 + vstup2}` + "<br>" +
//     `Rozdíl je: ${vstup1 - vstup2}` + "<br>" +
//     `Podíl je: ${vstup1 / vstup2}` + "<br>" + 
//     `Součin je: ${vstup1 * vstup2}` + "<br>"       
// );

// if (vstup1 > vstup2) {
//     document.write("Číslo 1 je větší" + "<br");
// } else if (vstup2 > vstup1) {
//     document.write("Číslo 2 je větší" + "<br>");
// }
// else {
//     document.write("Čísla jsou stejně velká" + "<br>");
// }
// document.write("-------------------------" + "<br>");

// let veta = "C++ je [kolikrat] KRÁT lepší!";
// let zmenenaVeta;
// zmenenaVeta = veta.trim().toLowerCase().replace("c++", "Javascript");
// let delka = zmenenaVeta.length * 3;
// zmenenaVeta = zmenenaVeta.replace("[kolikrat]", delka);
// document.write(zmenenaVeta);
// document.write("<br>");
// document.write(zmenenaVeta.startsWith("Javascript") + "<br>");
// document.write(zmenenaVeta.includes("krat") + "<br>");

// document.write("--------------------------" + "<br>");

// document.write(Math.random() + "<br>");
// document.write(Math.round(Math.random() * 10) + "<br>");

// document.write("--------------------------" + "<br>");

// const plnoletost = 18;
// const vek = 33;

// if (vek >= plnoletost) {
//     document.write("Jsi plnoletý");
// } else {
//     document.write("Nejsi plnoletý");
// }

// document.write("<br>");

// //ternární operátor
// document.write( (vek >= plnoletost) ? "Plnoletý" : "Mladistvý");

// document.write("<br>");

// let aa = 55;
// let bb = "55";
// document.write(`"A" je: ${typeof(aa)} a "B" je: ${typeof(bb)}`);
// document.write("<br>");
// document.write(aa === bb);
// document.write("<br>");
// document.write("---------------------------" + "<br>");

// let retezecVstup = prompt("Zadej libovolný textový řetězec: ");
// if (retezecVstup === retezecVstup.toUpperCase()) {
//     document.write("Pravda");
// } else {
//     document.write("Nepravda");
// }

// document.write("<br>");
// document.write("-----------------------------" + "<br>");

// for (let i = 0; i <= 10; i++){
//     document.write(i + ", ");
// }

// const heslo = "heslo123";
// const zadej = prompt("Zadej heslo: ");

// while (zadej != heslo) {
//     alert("Zadal jsi špatné heslo, zkus to znovu");
//     zadej = prompt("Zadej heslo: ");
// }

// document.write("<h1>Tajná informace</h1>");


// document.write("<table class='table table-hover table-primary'>");
// for (let i = 1; i <= 10; i++) {
//     document.write("<tr>");
//     for (let j = 1; j <= 10; j++) {
//         document.write(`<td>${i * j}</td>`);
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

// document.write("<br>");


document.write('<tr><th></th>');
for (let i = 1; i <= 8; i++) {
    document.write('<tr>' + i + '<tr>')
}
document.write('</tr>');

document.write("<table>");
for (let i = 1; i <= 8; i++) {
    document.write("<tr>");
    for (let j = 1; j <= 8; j++) {
        if((i + j)% 2 ==0) {
            document.write("<td class='bg-dark p-3'</td>");
        } else {
            document.write("<td class='bg-info p-3'</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");

const jmena = ['Karel', 'Jakub', 'Jana', 'Marie', 'Tomáš'];
document.write(jmena[3]);

document.write("<br>");

for (let jmeno in jmena) {
    document.write(jmeno + ", " + "<br>");
}

for (let jmeno of jmena) {
    document.write(jmeno + ", " + "<br>");
}

jmena.shift();
jmena.pop();
jmena.splice(2, 0, 'Tomáš');
jmena.splice(1, 2);

jmena.forEach(j => document.write(j + ", ") + "<br>");