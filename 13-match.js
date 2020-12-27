//buscar conteúdos específicos em uma massa de dados quando você não tem certeza de como isso foi estruturado lá

const textoNaoEstruturado = 'Meu cpf é 123.456.789-12';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoNaoEstruturado.match(regex));

//ele olha para a estrutura e não para o conteúdo em si
