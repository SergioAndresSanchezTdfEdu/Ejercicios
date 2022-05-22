document.getElementById("app").innerHTML = `
  <h1>Nombres Deseados</h1>
`;

let CantidadNombres = Number(prompt("Ingrese la cantidad de nombres a cargar"));
let NombresDeseados: string[] = new Array(5);

for (let i: number = 0; i < CantidadNombres; i++) {
  let Nombre: string = prompt(
    `Indique el nombre que desea incorporar en la posición ${i}: `
  );
  NombresDeseados[i] = Nombre;
}

for (let i: number = 0; i < CantidadNombres; i++) {
  console.log(`El nombre en la posición ${i} es ${NombresDeseados[i]}`);
}
