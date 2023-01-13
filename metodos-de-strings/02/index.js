const cpf = "12345678900";
const cnpj = "12345678000199";

let parteUm;
let parteDois;
let parteTres;
let parteQuatro;
let parteCinco;
let numFormatado;

if (cpf.length != 11) {
    console.log("CPF Inválido")
} else {
    parteUm = cpf.slice(0, 3);
    parteDois = cpf.slice(3, 6);
    parteTres = cpf.slice(6, 9);
    parteQuatro = cpf.slice(9, 11);

    numFormatado = parteUm + "." + parteDois + "." + parteTres + "-" + parteQuatro;

    console.log(numFormatado);
}

if (cnpj.length != 14) {
    console.log("CNPJ Inválido")
} else {
    parteUm = cnpj.slice(0, 2);
    parteDois = cnpj.slice(2, 5);
    parteTres = cnpj.slice(5, 8);
    parteQuatro = cnpj.slice(8, 12);
    parteCinco = cnpj.slice(12, 14);

    numFormatado = parteUm + "." + parteDois + "." + parteTres + "/" + parteQuatro + "-" + parteCinco;

    console.log(numFormatado);
}