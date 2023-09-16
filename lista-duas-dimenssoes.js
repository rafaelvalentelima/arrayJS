//Lista com duas dimenssões. Acesso alista completa mais externa e depois acessa o OfflineAudioCompletionEvent.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = ["10", "8", "7.5", "9"];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias); // acessa toda a lista toda.
console.log(
  "A aluna da posição 1 d lista de alunos é " +
    listaDeAlunosEMedias[0][1] +
    " e a nota dessa aluna é " +
    listaDeAlunosEMedias[1][1]
); //acessa uma aluna específica.
