document.getElementById("app").innerHTML = `
  <h1>Calcular el área de un rectángulo - Sin botón</h1>
  <p id="rotulobase">Ingrese el Valor de la Base</p>
  <input type="text" id="base" />
  <p id="rotuloaltura">Ingrese el Valor de la Altura</p>
  <input type="number" id="altura" />
  <p id="calculo"></p>
  `;

let base = document.getElementById("base");
let altura = document.getElementById("altura");

altura.addEventListener("change", () => {
  let resultado = Number(base.value) * Number(altura.value);
  console.log("Resultado: ", resultado);
  document.getElementById("calculo").innerHTML = "Resultado: " + resultado;
  //Así me dijo que lo ponga la interface
  //calculo.innerHTML = `Resultado: ${resultado}`;
});
