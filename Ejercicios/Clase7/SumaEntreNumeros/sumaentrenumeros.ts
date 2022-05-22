document.getElementById("app").innerHTML = `
<h1>Suma entre Números</h1>
<p id="resultado"></p>
  `;

let Numero1 = Number(prompt("Ingrese Número 1"));
let Numero2 = Number(prompt("Ingrese Número 2"));
let suma: number = 0;

for (let i: number = Numero1; i <= Numero2; i++) {
  suma += i;
}

console.log("La suma de " + Numero1 + " a " + Numero2 + " es: " + suma);
document.getElementById("resultado").innerHTML =
  "La suma de " + Numero1 + " a " + Numero2 + " es: " + suma;
