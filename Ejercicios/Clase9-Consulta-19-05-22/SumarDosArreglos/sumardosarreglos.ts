document.getElementById("app").innerHTML = `
  <h1>Sumar Dos Arreglos</h1>
`;
//llamar a las variables y funciones con minusculas como primer palabra
let Arreglo1: number[] = new Array(6);
let Arreglo2: number[] = new Array(6);
let SumaArreglo1y2: number[] = new Array(6);
//seria mejor llamar a esta funcion cargarArreglo
function LeerArreglo(
  Arreglo: number[],
  Tamanio: number,
  NombreArreglo: string
): number[] {
  for (let i: number = 0; i < Tamanio; i++) {
    let NumeroLeido: number;
    //definir variables fuera de ciclos
    NumeroLeido = Number(
      prompt(
        `Indique el número que desea incorporar en la posición ${i} del ${NombreArreglo}: `
      )
    );
    Arreglo[i] = NumeroLeido;
  }
  return Arreglo;
    //los arreglos son globales no hace falta retornarlos
}

function SumarArreglo(
  arreglo1: number[],
  arreglo2: number[],
  tamanio: number
): number[] {
  let SumaArreglos: number[] = new Array(tamanio);
  for (let i: number = 0; i < tamanio; i++) {
    SumaArreglos[i] = arreglo1[i] + arreglo2[i];
    //porque no usar el arreglo de suma ya definido al principio del script?
  }
  return SumaArreglos;
}

function MostrarArreglo(
  arreglo: number[],
  tamanio: number,
  NombreArreglo: string
) {
  for (let i: number = 0; i < tamanio; i++) {
    console.log(
      `El dato en la posición ${i} del ${NombreArreglo} es ${arreglo[i]}`
    );
  }
}

Arreglo1 = LeerArreglo(Arreglo1, 6, "Arreglo 1");
MostrarArreglo(Arreglo1, 6, "Arreglo 1");
Arreglo2 = LeerArreglo(Arreglo2, 6, "Arreglo 2");
MostrarArreglo(Arreglo2, 6, "Arreglo 2");
SumaArreglo1y2 = SumarArreglo(Arreglo1, Arreglo2, 6);
MostrarArreglo(SumaArreglo1y2, 6, "arreglo de la suma de los Arreglos 1 y 2");

/* Podría llamar todo así y no necesitaría definir Arreglo1, Arreglo2 y SumaArreglo1y2
MostrarArreglo(
  SumarArreglo(
    LeerArreglo(Arreglo1, 6, "Arreglo 1"),
    LeerArreglo(Arreglo2, 6, "Arreglo 2"),
    6
  ),
  6,
  "arreglo de la suma de los Arreglos 1 y 2"
);
*/
//a veces no es bueno mostrar tanta informacion, console.log arreglo es suficiente y claro
//El ejercicio esta bien resuelto
