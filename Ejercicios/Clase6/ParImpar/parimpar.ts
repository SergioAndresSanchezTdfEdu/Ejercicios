document.getElementById("app").innerHTML = `
  <h1>Par / Impar</h1>
  <p id="rotulo">Ingrese un número</p>
  <input type="text" id="numero" />
  <button id="btnValidar">Validar</button>
  <p id="respuesta"></p>
  `;

let Numero = document.getElementById("numero");

btnValidar.addEventListener("click", () => {
  if (Number(Numero.value) == 0) {
    console.log("El Número 0 no es ni par ni impar");
    document.getElementById("respuesta").innerHTML =
      "El Número 0 no es ni par ni impar";
  } else if (Number(Numero.value) % 2 == 0) {
    console.log("El Número ingresado es par");
    document.getElementById("respuesta").innerHTML =
      "El Número ingresado es par";
  } else {
    console.log("El Número ingresado es impar");
    document.getElementById("respuesta").innerHTML =
      "El Número ingresado es impar";
  }
});
