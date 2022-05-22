document.getElementById("app").innerHTML = `
  <h1>Calcular el área de un rectángulo</h1>
  <p id="rotulobase">Ingrese el Valor de la Base</p>
  <input type="number" id="base" />
  <p id="rotuloaltura">Ingrese el Valor de la Altura</p>
  <input type="number" id="altura" />
  <button id="btnEnviar">Calcular</button>
  `;

let base = document.getElementById("base");
let altura = document.getElementById("altura");

btnEnviar.addEventListener("click", () => {
  let resultado = Number(base.value) * Number(altura.value);

  console.log("Base: ", base.value);
  console.log("Altura: ", altura.value);

  console.log("Área del Rectangulo: ", resultado);
});
