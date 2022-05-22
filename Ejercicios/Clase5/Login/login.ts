document.getElementById("app").innerHTML = `
  <h1>Login</h1>
  <p id="rotulousuario">Usuario</p>
  <input type="text" id="usuario" />
  <p id="rotuloclave">Clave</p>
  <input type="text" id="clave" />
  <button id="btnValidar">Validar</button>
  <p id="permiso"></p>
  `;

const UsuarioValido: string = "Juan";
const ClaveValida: string = "claveJuan";

let User = document.getElementById("usuario");
let Pass = document.getElementById("clave");

btnValidar.addEventListener("click", () => {
  if (User.value === UsuarioValido && Pass.value === ClaveValida) {
    console.log("Bienvenido al Sistema");
    document.getElementById("permiso").innerHTML = "Bienvenido al Sistema";
  } else {
    console.log("Usuario y Clave incorrectos");
    document.getElementById("permiso").innerHTML =
      "Usuario y Clave incorrectos";
  }
});
