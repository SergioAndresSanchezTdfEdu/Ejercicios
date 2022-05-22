document.getElementById("app").innerHTML = `
  <h1>Calcular tiempo total y promedio de vueltas</h1>
  <p id="rotulobase">Ingrese los 4 tiempos de vuelta</p>
  <input type="number" id="tiempo1" />
  <input type="number" id="tiempo2" />
  <input type="number" id="tiempo3" />
  <input type="number" id="tiempo4" />
  <button id="btnCalcular">Calcular</button>
  <p id="tiempoTotal"></p>
  <p id="promedioVuelta"></p>
  `;

let vuelta1 = document.getElementById("tiempo1");
let vuelta2 = document.getElementById("tiempo2");
let vuelta3 = document.getElementById("tiempo3");
let vuelta4 = document.getElementById("tiempo4");

btnCalcular.addEventListener("click", () => {
  let tiempoTotal =
    Number(vuelta1.value) +
    Number(vuelta2.value) +
    Number(vuelta3.value) +
    Number(vuelta4.value);

  console.log("Tiempo total: ", tiempoTotal);
  document.getElementById("tiempoTotal").innerHTML =
    "Tiempo total: " + tiempoTotal;
  console.log("Promedio de vuelta: ", tiempoTotal / 4);
  document.getElementById("promedioVuelta").innerHTML =
    "Promedio de vuelta: " + tiempoTotal / 4;
});
