document.getElementById("app").innerHTML = `
<h1>Dados</h1>
<p id="resultado"></p>
  `;

let Numero: number = Number(prompt("Ingrese La cantidad de dados"));

console.log(
  ("La probabilidad de sacar 6 en los " + Numero + " dados, es de: 1/" + (6**
    Numero)
);
document.getElementById("resultado").innerHTML =
  "La probabilidad de sacar 6 en los " + Numero + " dados, es de: 1/" + (6**
  Numero);
