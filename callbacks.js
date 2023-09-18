const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  // Uma função Callback dentro de um forEach.
  console.log(nome);
});
/////////////////////////////////////////////////////////////////////////////////
nomes.forEach((nome) => {
  // Essa é a ARROW FUNCTION será a mais usada.
  //Segunda maneira da função Callback.
  console.log(nome);
});
////////////////////////////////////////////////////////////////////////////////
function imprimeNome(nome) {
  console.log(nome);
} // Terceira maneira de fazer uma função Callback

nomes.forEach(imprimeNome); //Declarando a função, não pode ter os "()" de parâmetro, pois aqui só esta passando uma referência e não executar a função.
