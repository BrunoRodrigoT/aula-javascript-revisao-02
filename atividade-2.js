//Questao - 1
function consocio(modelo) {
    switch (modelo) {
        case 'hatch':
            console.log("Compra efetuada com sucesso")
            break

        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log("Tem certeza que não prefere este modelo?")
            break

        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}
consocio("trem")

//Questao - 2
function geometria(a, b, c){
    
    if (a == b && b == c && a == c) {
        console.log("Triângulo Equilátero")
    }else if (a != b && b != c && c != a) {
        console.log("Triângulo Escaleno")
    }else{
        console.log("Triângulo Isósceles")
    }
}
geometria(2, 2, 2)

//Questao - 3
function positivoNegativo(x){

    if (x >= 0) {
        console.log("Positivo")        
    }else{
        console.log("Negativo")
    }
}
positivoNegativo(-2)