document.getElementById("app").innerHTML = `
<h1>Tablas de Multiplicación</h1>
<p id="resultado0"></p>
<p id="resultado1"></p>
<p id="resultado2"></p>
<p id="resultado3"></p>
<p id="resultado4"></p>
<p id="resultado5"></p>
<p id="resultado6"></p>
<p id="resultado7"></p>
<p id="resultado8"></p>
<p id="resultado9"></p>
<p id="resultado10"></p>
  `;

let NumeroTabla = Number(prompt("Ingrese Número de Tabla"));
let NumeroHasta = Number(prompt("Ingrese Número Hasta"));
let suma: number = 0;

for (let i: number = 0; i <= NumeroHasta; i++) {
  console.log(NumeroTabla + " x " + i + " = " + NumeroTabla * i);
  document.getElementById("resultado" + i).innerHTML =
    NumeroTabla + " x " + i + " = " + NumeroTabla * i;
}
