const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota, indice) {
  //A vantagem é que posso adicionar mais índice.
  somaDasNotas += nota;
  console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log("A média das notas é:", media);
