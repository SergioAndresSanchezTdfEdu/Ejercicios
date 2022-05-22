document.getElementById("app").innerHTML = `
<h1>Calificaciones</h1>
`;

let Nombre: string = prompt("Ingrese el Nombre del Alumno");
let Numero1, Numero2, Numero3, Promedio: number;

while (Nombre !== "") {
  if (Nombre !== "") {
    console.log("Nombre del Alumno: " + Nombre);
  }
  Numero1 = Number(prompt("Ingrese calificación de la Práctica"));
  Numero2 = Number(prompt("Ingrese calificación de la Problemas"));
  Numero3 = Number(prompt("Ingrese calificación de la Teoría"));
  console.log(
    "Calificación Práctica: " +
      Numero1 +
      "\n" +
      "Calificación Problemas: " +
      Numero2 +
      "\n" +
      "Calificación Problemas: " +
      Numero3
  );

  if (
    Numero1 >= 0 &&
    Numero2 >= 0 &&
    Numero3 >= 0 &&
    Numero1 <= 10 &&
    Numero2 <= 10 &&
    Numero3 <= 10
  ) {
    Promedio = Numero1 * 0.1 + Numero2 * 0.5 + Numero3 * 0.4;
    console.log("Promedio: " + Promedio);
  } else {
    console.log("Error, Usted ingreso un valor incorrecto.");
  }
  Nombre = prompt("Ingrese el Nombre del Alumno");
}
