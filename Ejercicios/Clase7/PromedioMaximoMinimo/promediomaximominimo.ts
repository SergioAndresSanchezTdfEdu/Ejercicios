document.getElementById("app").innerHTML = `
<h1>Promedio-Máximo-Mínimo</h1>
<p id="resultado"></p>
  `;

let Numero: number = Number(prompt("Ingrese un Número"));
let Maximo = Numero;
let Minimo = Numero;
let CantidadLeidos: number = 0;
let Suma: number = 0;
let Promedio: number = 0;

while (Numero !== 0) {
  CantidadLeidos++;

  if (Numero > Maximo) {
    Maximo = Numero;
  }
  if (Numero < Minimo) {
    Minimo = Numero;
  }
  Suma += Numero;
  Numero = Number(prompt("Ingrese un Número"));
}

Promedio = Suma / CantidadLeidos;
console.log(
  "Mínimo: " + Minimo + "\nMáximo: " + Maximo + "\nPromedio: " + Promedio
);
document.getElementById("resultado").innerHTML =
  "Mínimo: " +
  Minimo +
  "<br />Máximo: " +
  Maximo +
  "<br />Promedio: " +
  Promedio;
