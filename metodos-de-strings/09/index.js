const nome = 'Guido O Cerqueira';

//O nickname deve conter, no máximo, 13 caracteres;
//Deve começar sempre com "@";
//Não deve existir espaços em branco;
//São permitidos apenas caracteres minúsculos.

let nickName = nome.toLowerCase();
nickName = nickName.split(" ");

let arroba = "@";
let primeiroNome = nickName[0];
let ponto = ".";
let meioNome = nickName.length == 2 ? "" : nickName[1].slice(0, 1);
let finalNome = nickName[(nickName.length - 1)];

let nickSugerido = arroba + primeiroNome + ponto + meioNome + finalNome;

while (nickSugerido.length > 14) {
    nickSugerido = nickSugerido.slice(0, (nickSugerido.length - 1))
}

console.log(nickSugerido)



