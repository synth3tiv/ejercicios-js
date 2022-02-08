const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

// Solucion 1
console.log("//////////////// 1 ////////////////");

ejercicio1.forEach((numero) => {
  for (let i = 2; i <= numero; i++) {
    if (numero % i === 0 && numero != i) {
      break;
    } else if (numero % i === 0) {
      console.log(`${numero} es primo`);
    }
  }
});

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

// Solucion 2
console.log("//////////////// 2 ////////////////");

ejercicio2.forEach((invitado) => {
  if (invitado.edad >= 18 && invitado.esFamiliar) {
    console.log(`${invitado.nombre}, estas invitadx a la fiesta de Ramón`);
  }
});

// Solucion 3
console.log("//////////////// 3 ////////////////");

function serieFibonacci(limite) {
  const fibonacci = [0, 1]; // la serie comienza con 0 y 1
  for (let i = 2; i < limite; i++) { // igualamos a 2 porque es el index que nos falta
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // en el index 2 se pone la suma de lo que hay en index 1 + lo que hay en index 0
  }
  return fibonacci;
}

console.log(serieFibonacci(50));