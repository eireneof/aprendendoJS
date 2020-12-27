//o var coloca muita coisa em memória e isso pode te dar problemas futuros
//então vamos usar o let (mais atual)

let meuNome = 'Eirene';
let meuSobrenome = 'Fireman';
let minhaProffisao = 'estudante/desempregada/falida';

//sobre formatação de texto:

//SEM TEMPLATE STRING
//antes: console.log('Olá eu sou ' + meuNome + ' ' + meuSobrenome ' minha profissão é: ' + minhaProfissao);
//isso não é muito produtivo

//COM TeMPLATE STRING
//obs: o operador é a crase (o que se usa quando se escreve com crase)
console.log(
    `Olá eu sou ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProffisao}`
    );
//também dá para executar operações
console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`);

let gasto = 50;
let ganho = 100;

console.log(`O seu lucro foi de R$ ${ganho - gasto}`);

//também serve para objetos