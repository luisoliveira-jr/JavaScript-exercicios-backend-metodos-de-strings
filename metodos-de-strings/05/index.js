const numeroCartao = '1111222233334444';

let iniciaisCartao;
let finaisCartão;
let numeroCartaoEscondido;

if (numeroCartao.length != 16) {
    console.log("Número do cartão inválido")
} else {
    iniciaisCartao = numeroCartao.slice(0, 4)
    finaisCartão = numeroCartao.slice(12, 16)
    numeroCartaoEscondido = iniciaisCartao + "********" + finaisCartão
    console.log(numeroCartaoEscondido)
}

