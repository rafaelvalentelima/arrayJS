const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João"];

const meuSet = new Set(nomes); //É uma classe do JavaScript. É como se fosse uma lista, com outras regras.Ele tira valores repetidos.

console.log(meuSet); //Aqui eu terei minha lista como SET.

// const nomes atualizados = [...new Set(nomes)]//essa e uma forma mais facil de escrever, porem difícil de entender.

const nomesAtualizados = [...meuSet]; ///aqui eu transformo meu SET em lista novamente.

console.log(nomesAtualizados);
