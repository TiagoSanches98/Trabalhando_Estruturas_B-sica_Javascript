// neste código estamos trabalhando com array, usando o método slice que me permite dividir o array em partes

const alunos = [
    "Ana",
    "João",
    "Maria",
    "Pedro",
    "Carla",
    "Rafael",
    "Lúcia",
    "Miguel",
    "Sara",
    "Gustavo",
    "Laura",
    "Ricardo",
    "Isabela",
    "Fernando",
    "Camila",
    "Eduardo",
    "Patrícia",
    "Hugo",
    "Alice",
    "André"
  ];

const sala1 = alunos.slice(0, 10);
const sala2 = alunos.slice(10);
console.log(sala1);
console.log(sala2);

