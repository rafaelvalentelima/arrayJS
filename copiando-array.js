const notas = [7, 7, 8, 9];

// const novasNotas = notas;//Aqui é onde tudo é modificado. Quando atribuimos modificamos e deixamos as duas iguais. Então queremos fazer uma cópia do array sem alterar a original.
const novasNotas = [...notas, 10]; //Método SPREAD OPERATOR colocamos "notas" dentro do [...] ele não altera a original, comos se copiasse a array original e colocasse dentro dos [].Pode também ser usado no parâmetro de uma array.

//novasNotas.push(10); // atualiza a array modificando a original. PODE SER USADO DEPOIS DE NOTAS ENTRE COLCHETES.

console.log("As novas notas são:", novasNotas);
console.log("As notas originais são:", notas);
