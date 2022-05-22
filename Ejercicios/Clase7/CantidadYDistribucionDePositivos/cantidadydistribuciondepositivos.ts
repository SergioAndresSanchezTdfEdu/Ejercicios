document.getElementById("app").innerHTML = `
<h1>Cantidad y Distribución de Positivos</h1>
<p id="resultado"></p>
  `;

let Numero: number = Number(prompt("Ingrese un Número"));
let MayoresA: number = 0;
let PorcentajePositivos: number = 0;
let CantidadLeidos: number = 0;

while (Numero !== 0) {
  CantidadLeidos++;

  if (Numero > 0) {
    MayoresA++;
  }
  Numero = Number(prompt("Ingrese un Número"));
}

PorcentajePositivos = (MayoresA * 100) / CantidadLeidos;
console.log(MayoresA + " positivos, " + PorcentajePositivos + "% del total");
document.getElementById("resultado").innerHTML =
  MayoresA + " positivos, " + PorcentajePositivos + "% del total";
