document.getElementById("app").innerHTML = `
  <h1>Par / Impar</h1>
  `;

let Numero: number = Number(prompt("Ingrese un número"));

while (Numero === 0) {
  alert("Numéro debe ser distinto de 0");
  Numero = Number(prompt("Ingrese un número"));
}

if (Numero % 2 === 0) {
  console.log("El Número ingresado es par");
} else {
  console.log("El Número ingresado es impar");
}
