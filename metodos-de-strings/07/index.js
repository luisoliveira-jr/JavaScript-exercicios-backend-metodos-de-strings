/* 
jose@cubos.academy
jose@cubos.academy.br
jose.messias@cubos.academy
jose.messias@cubos.io
jose@cubos
jose.messias@cubos
jose.messias@.
jose.@cubos
.@
@.
jose.messias@cubos.
.messias@cubos.
.messias@cubos  
*/

//Validação de e-mail
const email = ".messias@cubos";


//Sempre tem que ter @
let temArroba = email.includes("@"); //true

//Sempre tem que ter pelo menos um .
let temPonto = email.includes("."); //true

//Nunca pode começar com .
let dotBegin = email.slice(0, 1)

//Nunca pode terminar com .
let dotFinish = email.slice((email.length - 1), email.length)

if (temArroba && temPonto && dotBegin != "." && dotFinish != ".") {
    console.log("E-mail válido")
} else {
    console.log("E-mail inválido")
}

