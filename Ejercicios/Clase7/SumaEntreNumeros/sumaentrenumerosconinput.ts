document.getElementById("app").innerHTML = `
<h1>Suma entre Números</h1>
<p id="rotulosueldo">Ingrese Número 1</p>
<input type="text" id="num1" />
<p id="rotulosueldo">Ingrese Número 2</p>
<input type="text" id="num2" />
<button id="btnCalcular">Calcular</button>
<p id="resultado"></p>
  `;

let Numero1 = document.getElementById("num1");
let Numero2 = document.getElementById("num2");

let suma: number = 0;

btnCalcular.addEventListener("click", () => {
  for (let i: number = Number(Numero1.value); i <= Number(Numero2.value); i++) {
    suma += i;
  }

  console.log(
  "La suma de " +
    Number(Numero1.value) +
    " a " +
    Number(Numero2.value) +
    " es: " +
    suma
  );
  document.getElementById("resultado").innerHTML =
  "La suma de " +
  Number(Numero1.value) +
  " a " +
  Number(Numero2.value) +
  " es: " +
  suma;
}