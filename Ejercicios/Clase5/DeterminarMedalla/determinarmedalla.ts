document.getElementById("app").innerHTML = `
  <h1>Determinar Medalla</h1>
  <input type="text" id="posicion" />
  <button id="btnDeterminar">Determinar</button>
  <p id="medalla"></p>
  `;

btnDeterminar.addEventListener("click", () => {
  let posicionCompetidor = document.getElementById("posicion");

  switch (Number(posicionCompetidor.value)) {
    case 1:
      console.log("Entregar medalla de Oro");
      document.getElementById("medalla").innerHTML = "Entregar medalla de Oro";
      break;
    case 2:
      console.log("Entregar medalla de Plata");
      document.getElementById("medalla").innerHTML =
        "Entregar medalla de Plata";
      break;
    case 3:
      console.log("Entregar medalla de Bronce");
      document.getElementById("medalla").innerHTML =
        "Entregar medalla de Bronce";
      break;
    default:
      console.log("Entregar medalla de Participación");
      document.getElementById("medalla").innerHTML =
        "Entregar medalla de Participación";
  }
});
