//É muito comum quando falamos em programação orientada a obejtdos, trabalhar com classes

class Matematica {
    //o JS já entende que quando eu coloco um nome e () se trata de uma função, então não preciso declarar
    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4,7);

console.log(resultado);