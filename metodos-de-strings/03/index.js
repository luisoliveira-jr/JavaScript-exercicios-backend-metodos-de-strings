const texto = "Aprenda programar do zero na Cubos Academy";

let urlAmigavel = texto.toLowerCase();

while (urlAmigavel !== urlAmigavel.replace(" ", "-")) {
    urlAmigavel = urlAmigavel.replace(" ", "-")
}
console.log(urlAmigavel);

