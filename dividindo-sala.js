const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10); //Quando não colocamos o segundo parâmetro significa que ele vai pegar até o ultimo dado da array.

const sala1 = alunos.slice(0, alunos.length / 2); // Esse padrão fica mais dinâmico sem precisar contar os alunos
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);
