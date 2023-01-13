const comentario = "Esse COVID é muito perigoso!";

let palavra = comentario.split(" ");
let autoriza = 0;

for (let filtro of palavra) {
    filtroMinusculo = filtro.toLowerCase()
    if (filtroMinusculo == "pandemia" || filtroMinusculo == "covid") {
        console.log("Comentário bloqueado por conter palavras proibidas.");
        autoriza += 1;
        break;
    }

}

if (autoriza == 0) {
    console.log("Comentário autorizado.");
}
