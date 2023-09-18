//Filtrando Elementos

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = ["7", "4.5", "8", "7.5"];

const reprovados = alunos.filter((alunos, indice) => {
  //  quando não queremos nomear o primeiro parâmetro colocamos um "_".
  return medias[indice] < 7;
});

console.log(reprovados);
