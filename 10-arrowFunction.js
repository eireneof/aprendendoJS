//ARROW FUNCTION - abstração de uma função

function soma(x, y) {
    return x + y;
}

console.log(soma(3,4));

const multiplicacao = function(x,y) {
    return x * y;
};

console.log(multiplicacao(5,5));

// é legal colocar constante em funções para elas não serem inesperadamente alteradas

const dividir = (x,y) => {
    return x / y;
};

//construção dinâmica de objetos

const objeto = () => ({nome: 'Eirene', sobrenome: 'Fireman'});