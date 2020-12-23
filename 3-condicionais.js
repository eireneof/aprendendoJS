var nome = 'Fireman';
//= atribuição
//=== comparação

/*if(nome === 'Eirene') {
    console.log('Uau! Seu nome é este mesmo ;)');
} else if (nome === 'Fireman'){
    console.log('Que pena! Você é a Fireman :(');
} else {
    console.log('Ihhhh, seu nome não é nenhum dos dois! :v')
}*/ 

//USANDO SWITCH para o código ficar mais "enxuto"

switch (nome) {
    case 'Eirene':
        console.log('Uau! Seu nome é este mesmo ;)');
        break; //use break para terminar os teste de caso
    case 'Fireman':
        console.log('Que pena! Você é a Fireman :(');
        break;
    default:
        console.log('Ihhhh, seu nome não é nenhum dos dois! :v')
        break;
}