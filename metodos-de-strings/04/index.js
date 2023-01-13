let identificador = "1234";
let nome = "José silva costa";
let email = "      jose@email.com  ";

//Formata identificador
identificador = identificador.padStart(6, "0")

//Formata nome
let nomeFormatado = "";
nome = nome.toLowerCase();
nomeArray = nome.split(" ");

for (let item of nomeArray) {
    let primeriaLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeriaLetra.toUpperCase() + restanteDoNome + " ";
}
nome = nomeFormatado.trim();

//Formata email
email = email.trim();

//Imprime
console.log(identificador)
console.log(nome)
console.log(email)