document.getElementById("app").innerHTML = `
  <h1>Descuento 15% Octubre</h1>
  <p id="rotulopu">Ingrese un precio unitario</p>
  <input type="text" id="preciounitario" />
  <p id="rotuloc">Ingrese una cantidad</p>
  <input type="text" id="cantidad" />
  <p id="rotulom">Ingrese un mes</p>
  <input type="text" id="mes" />
  <button id="btnValidar">Validar Descuento</button>
  <p id="respuesta"></p>
  `;

let PrecioUnitario = document.getElementById("preciounitario");
let Cantidad = document.getElementById("cantidad");
let Mes = document.getElementById("mes");

btnValidar.addEventListener("click", () => {
  let PrecioFinalConDescuento: number =
    Number(PrecioUnitario.value) * Number(Cantidad.value) * 0.85;
  let PrecioFinal: number =
    Number(PrecioUnitario.value) * Number(Cantidad.value);

  if (Mes.value === "Octubre") {
    // En el console.log si pongo el simbolo % no me muestra el valor de la variable
    console.log(
      "El cliente tiene un descuento del 15 por ciento, a pagar: $ ",
      PrecioFinalConDescuento
    );
    document.getElementById("respuesta").innerHTML =
      "El cliente tiene un descuento del 15%, a pagar: $ " +
      PrecioFinalConDescuento;
  } else {
    console.log(
      "El cliente no tiene un descuento del 15 por ciento, a pagar: $ ",
      PrecioFinal
    );
    document.getElementById("respuesta").innerHTML =
      "El cliente no tiene un descuento del 15%, a pagar: $ " + PrecioFinal;
  }
});
