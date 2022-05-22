document.getElementById("app").innerHTML = `
  <h1>Aumento de Sueldo</h1>
  <p id="rotulosueldo">Ingrese el Sueldo Actual</p>
  <input type="text" id="sueldo" />
  <button id="btnValidar">Validar</button>
  <p id="sueldoconaumento"></p>
  `;
const hasta15 = 1.2;
const de15a20 = 1.1;
const de20a25 = 1.05;

let Sueldo = document.getElementById("sueldo");

btnValidar.addEventListener("click", () => {
  if (Number(Sueldo.value) >= 0 && Number(Sueldo.value) <= 15000) {
    console.log("Sueldo con Aumento $", Number(Sueldo.value) * hasta15);
    document.getElementById("sueldoconaumento").innerHTML =
      "Sueldo con Aumento $" + Number(Sueldo.value) * hasta15;
  } else if (Number(Sueldo.value) >= 15001 && Number(Sueldo.value) <= 20000) {
    console.log("Sueldo con Aumento $", Number(Sueldo.value) * de15a20);
    document.getElementById("sueldoconaumento").innerHTML =
      "Sueldo con Aumento $" + Number(Sueldo.value) * de15a20;
  } else if (Number(Sueldo.value) >= 20001 && Number(Sueldo.value) <= 25000) {
    console.log("Sueldo con Aumento $", Number(Sueldo.value) * de20a25);
    document.getElementById("sueldoconaumento").innerHTML =
      "Sueldo con Aumento $" + Number(Sueldo.value) * de20a25;
  } else {
    console.log("No hay aumento");
    document.getElementById("sueldoconaumento").innerHTML = "No hay aumento";
  }
});
