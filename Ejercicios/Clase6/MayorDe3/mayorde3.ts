document.getElementById("app").innerHTML = `
  <h1>Mayor de 3</h1>
  <p id="rotulosueldo">Ingrese Número 1</p>
  <input type="text" id="num1" />
  <p id="rotulosueldo">Ingrese Número 2</p>
  <input type="text" id="num2" />
  <p id="rotulosueldo">Ingrese Número 3</p>
  <input type="text" id="num3" />
  <button id="btnCalcular">Calcular</button>
  <p id="resultado"></p>
  `;

let Numero1 = document.getElementById("num1");
let Numero2 = document.getElementById("num2");
let Numero3 = document.getElementById("num3");

btnCalcular.addEventListener("click", () => {
  if (
    Number(Numero1.value) > Number(Numero2.value) &&
    Number(Numero1.value) > Number(Numero3.value)
  ) {
    console.log("El mayor de los 3 es: ", Number(Numero1.value));
    document.getElementById("resultado").innerHTML =
      "El mayor de los 3 es: " + Number(Numero1.value);
  } else if (
    Number(Numero2.value) > Number(Numero1.value) &&
    Number(Numero2.value) > Number(Numero3.value)
  ) {
    console.log("El mayor de los 3 es: ", Number(Numero2.value));
    document.getElementById("resultado").innerHTML =
      "El mayor de los 3 es: " + Number(Numero2.value);
  } else if (
    Number(Numero3.value) > Number(Numero1.value) &&
    Number(Numero3.value) > Number(Numero2.value)
  ) {
    console.log("El mayor de los 3 es: ", Number(Numero3.value));
    document.getElementById("resultado").innerHTML =
      "El mayor de los 3 es: " + Number(Numero3.value);
  } else {
    console.log("Existen 2 o más números iguales dentro de los mayores");
    document.getElementById("resultado").innerHTML =
      "Existen 2 o más números iguales dentro de los mayores";
  }
});
