document.getElementById("app").innerHTML = `
<h1>Encontrar el Número Máximo</h1>
<p id="resultado"></p>
  `;

let Numero: number = Number(prompt("Ingrese un Número"));
let Maximo = Numero;

while (Numero !== 0) {
  if (Numero > Maximo) {
    Maximo = Numero;
  }
  Numero = Number(prompt("Ingrese un Número"));
}

console.log("El máximo es " + Maximo);
document.getElementById("resultado").innerHTML = "El máximo es " + Maximo;
