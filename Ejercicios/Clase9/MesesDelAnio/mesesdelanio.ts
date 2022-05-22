document.getElementById("app").innerHTML = `
  <h1>Meses del Año</h1>
`;

let posicion: number = Number(prompt("Ingrese numero de mes"));

let Meses: string[] = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

console.log("El mes es: " + Meses[posicion - 1]);
