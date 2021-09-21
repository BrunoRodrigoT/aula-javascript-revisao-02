//Questao - 1 
function positivoNegativo(variavel_numero) {

    if (variavel_numero < 0) {
        console.log("Número Negativo")
    } else {
        console.log("Número Positivo")
    }
}
positivoNegativo(-1)

//Questão - 2
function calculando(a, b, c) {
    let result = a + c
    if (a + c > b) {
        console.log("a + c = " + result)
    } else {
        console.log("a + c = " + b)
    }
}
calculando(1, 2, 3)

//Questao - 3

function periodo(horario){
    switch (horario) {
        case 'matutino':
            console.log("Bom dia!")
            break;

        case 'vespertino':
            console.log("Boa Tarde!")
            break;

        case 'noturno':
            console.log("Boa noite!")
            break;

        default:
            console.log("Valor Inválido")
            break;
    }
}
periodo("matutino")