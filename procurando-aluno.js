const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = ["10", "8", "7.5", "9"];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0]; // essa é uma forma mais poluída e que usa menos código.    ]
    // const medias = listaDeAlunosEMedias[1];

    const [alunos, medias] = listaDeAlunosEMedias; // Uma forma mais simplies de escrever o código acima: Criei uma const e atribuí os valores de listaDeAlunosEMedias.
    //Sintaxe de desistruturação de Lista

    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(aluno, " tem a média ", mediaDoAluno);
  } else {
    console.log("Aluno não encontrado");
  }
}
exibeNomeENota("João"); //Criou a função e aqui esta chamando.
exibeNomeENota("Rafa");
