let lista = [1, 2, 5];
let listaIncluir = [3, 4];
//devemos incluir o 3 e 4 dentro da primeira lisa entre 2 e 5

for(let i = 0; i < listaIncluir.length; i++) {
    for(let j = 0; j < lista.length; j++) {
        if(lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}

console.log(lista);

const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

let arr = ['a', 'b', 'c'];

// let arr2 = arr;
// arr2.push('d');
//assim eu só criei uma referência para o arr e todas as alterações em arr2 refletem em arr

let arr2 = [...arr];
arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);