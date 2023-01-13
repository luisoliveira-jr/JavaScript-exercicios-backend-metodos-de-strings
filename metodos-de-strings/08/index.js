const cpf = "011.022.033-44";

let cpfLimpo = cpf;

while (cpfLimpo !== cpfLimpo.replace(".", "")
    || cpfLimpo !== cpfLimpo.replace("-", "")) {

    cpfLimpo = cpfLimpo.replace(".", "");
    cpfLimpo = cpfLimpo.replace("-", "");
}

console.log(cpfLimpo);