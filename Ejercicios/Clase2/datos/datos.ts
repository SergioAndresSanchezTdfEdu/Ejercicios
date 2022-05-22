document.getElementById("app").innerHTML = `
  <h1>Ingreso de datos</h1>
  <p id="rotulo">Dato</p>
  <input type="text" id="dato" />
  <button id="btnEnviar">Enviar</button>
`;

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
rotulo.innerHTML = "Ingrese un dato: ";
btnEnviar.innerHTML = "ENVIAR";

btnEnv.addEventListener("click", () => {
  //TU CODIGO VAAQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", dato.value);
});
