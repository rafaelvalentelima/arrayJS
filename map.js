const notas = [10, 9.5, 8, 7, 6];

// notas.map((nota) => { //o Map não altera o array original
//   return notas + 1;
// })

// console.log(notas);

const notasAtualizadas = notas.map((nota) => {
  //tem que criar uma nova Array
  return nota + 1 >= 10 ? 10 : nota + 1; //Ultilizando OPERADOR TERNÁRIO, para atribuir um ponto em cada nota .
});

console.log(notasAtualizadas);
