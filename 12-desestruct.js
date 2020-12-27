const pessoa = {
    nome: 'Eirene',
    sobrenome: 'Fireman',
    idade: 20,
    profissao: 'artesa'
};

//console.log(pessoa);

//SEM DESESTRUCT

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;
// let profissao = pessoa.profissao;

let { nome, sobrenome, idade, profissao } = pessoa;
//eu posso excluir e alternar, só não posso colocar o que não existe no objeto

console.log(nome, sobrenome, idade, profissao);