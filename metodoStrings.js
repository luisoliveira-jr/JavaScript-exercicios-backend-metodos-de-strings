//includes(): verifica se um texto existe dentro de outro texto, retorna booleano
//variavel.includes("string pesquisada")
const frase = "Na Cubos eu estou aprendendo a programar na Cubos Academy";
console.log("includes: ", frase.includes("Cubos"));

//indexOf(): verifica onde está (em qual indice) um texto dentro de outro texto, retorna a primeira ocorrência, se não encontrar retorna -1
console.log("indexOf: ", frase.indexOf("Cubos"));

//saber se um e-mail é valido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @
const possivelEmail = "jose.messias@cubos.academy";
const indexArroba = possivelEmail.indexOf("@"); //4
const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email válido")
} else {
    console.log("Email inválido")
}

//lastIndexOf(): verifica onde está a ultima impressao de (qual o último indice) um texto dentro de outro texto, nesse caso a verificação inicia de trás para frente, retorna a ultima ocorrência, se não encontrar retorna -1
console.log("lastIndexOf: ", frase.lastIndexOf("Cubos"));

//slice(): pega parte de uma string e transforma em outra string
//Quero obter apenas os dois digitos do estado
const cidade = "Salvador-BA";
let estado = cidade.slice(-2);
console.log(estado);

//replace(): substitui uma string, substitui apenas o primeiro match
const texto = "Eu amo a Cubos, amo muito";
const parte = texto.replace("amo", "adoro");
console.log(parte);

//Substituir , por .
const numero = "97.50";
const variavelAletrada = numero.replace(".", ",")
console.log(variavelAletrada);

let valor = "1,350,000";

while (valor !== valor.replace(",", ".")) {
    valor = valor.replace(",", ".")
}
console.log(valor);

//toUpperCase(): transforma em maiuscula

//toLowerCase(): transforma em minuscula

//trim(): retira os espaços no começo e no final da string

//padStart(): preenche o começo de uma string, com um caractere especificado, até que atinja o tamanho esperado 

//split(): torna uma string em uma array de strings, dividindoa a partir do caractere indicado

//Transforme jose messias junior em Jose Messias Junior
const nome = "jose messias junior";
const arrayDeNomes = nome.split(" ");
let nomeFormatado = "";

for (let item of arrayDeNomes) {
    //transformar inicial de cada item em maiúscula
    let primeriaLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeriaLetra.toUpperCase() + restanteDoNome + " ";
}
console.log(nomeFormatado.trim());