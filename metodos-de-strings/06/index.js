const celular = 7199918888;

let ddd = "";
let nove = " 9 ";
let parteUm = "";
let traco = "-";
let parteDois = "";
let celularFormatado = "";

let celularS = String(celular);

if (celularS.length == 8) {
    parteUm = celularS.slice(0, 4);
    parteDois = celularS.slice(4, 8);
    celularFormatado = ddd + nove + parteUm + traco + parteDois
    console.log(celularFormatado.trim())
} else if (celularS.length == 9) {
    parteUm = celularS.slice(1, 5);
    parteDois = celularS.slice(5, 9);
    celularFormatado = ddd + nove + parteUm + traco + parteDois
    console.log(celularFormatado.trim())
} else if (celularS.length == 10) {
    ddd = "(" + celularS.slice(0, 2) + ")";;
    parteUm = celularS.slice(2, 6);
    parteDois = celularS.slice(6, 10);
    celularFormatado = ddd + nove + parteUm + traco + parteDois
    console.log(celularFormatado.trim())
} else if (celularS.length == 11) {
    ddd = "(" + celularS.slice(0, 2) + ")";
    parteUm = celularS.slice(3, 7);
    parteDois = celularS.slice(7, 11);
    celularFormatado = ddd + nove + parteUm + traco + parteDois
    console.log(celularFormatado.trim())
} else {
    console.log("Número de celular inválido")
}