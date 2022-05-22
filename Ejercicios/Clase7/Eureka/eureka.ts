document.getElementById("app").innerHTML = `
  <h1>Login</h1>
  `;

let clave: string = "eureka";
let pass: string = "";

for (let i: number = 1; i <= 3; i++) {
  pass = prompt("Ingrese la clave, intento nº " + i);
  if (pass == clave) {
    alert("clave correcta");
    break;
  } else {
    alert("Clave incorrecta");
  }
}
