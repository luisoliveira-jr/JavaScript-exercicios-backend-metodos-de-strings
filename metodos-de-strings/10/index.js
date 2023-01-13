const nomeArquivo = 'Foto da Familia.jpg';

let ext = nomeArquivo.slice(-3)

if (ext == "jpg" || ext == "gif" || ext == "png") {
    console.log("Arquivo válido.")
} else if ((ext = nomeArquivo.slice(-4)) == "jpeg") {
    console.log("Arquivo válido.")
} else {
    console.log("Arquivo inválido.")
}
