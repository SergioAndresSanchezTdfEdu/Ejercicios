document.getElementById("app").innerHTML = `
  <h1>Validar Altura</h1>
  <p id="rotulobase">1,30 mts o más para entrar a la Montaña Rusa</p>
  <input type="number" id="altura" />
  <button id="btnValidar">Validar</button>
  <p id="permiso"></p>
  `;

const ALturaMinima: number = 1.3;

let alturaPersona = document.getElementById("altura");

btnValidar.addEventListener("click", () => {
  if (Number(alturaPersona.value) >= ALturaMinima) {
    console.log("La persona puede entrar.");
    document.getElementById("permiso").innerHTML = "La persona puede entrar.";
  } else {
    console.log("La persona NO puede entrar.");
    document.getElementById("permiso").innerHTML =
      "La persona NO puede entrar.";
  }
});
