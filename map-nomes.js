//Alterando strings com o map(), nomes com letra maiúsculas.

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadronizados = nomes.map((nome) => {
//   return nome.toLocaleUpperCase();
// });

const nomesPadronizados = nomes.map((nome) => nome.toLocaleUpperCase()); // Toda arrow function podemos omitir o return e as chaves, para que fique um código mais limpo.

console.log(nomesPadronizados);
