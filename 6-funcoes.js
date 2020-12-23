//Uma função serve para armazenar um bloco de código para que ele possa ser usado e reutilizado quantas vezes forem necessária

function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaHumano(nome) {
    console.log('Olá Humano, você é  ' + nome);
}

var resultadoDaSoma = soma(1,2);
var resultadoNovoDaSoma = soma(10,66);

console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaHumano('Eirene');