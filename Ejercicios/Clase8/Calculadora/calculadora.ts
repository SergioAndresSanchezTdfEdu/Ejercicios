document.getElementById("app").innerHTML = `
  <h1>Multiplos de 2 y 3</h1>
  <p>Ingrese el Primer Valor</p>
  <input type="text" id="valor1" />
  <p>Ingrese el Segundo Valor</p>
  <input type="text" id="valor2" />
  <p>Ingrese 1 para Sumar, 2 para restar y cualquier otro valor para finalizar el programa</p>
  <input type="text" id="operacion" />
  <button id="btnCalcular">Calcular</button>
`;

document.getElementById("btnCalcular").addEventListener("click", () => {
  let Valor1 = document.getElementById("valor1");
  let Valor2 = document.getElementById("valor2");
  let Operacion = document.getElementById("operacion");

  function obtenerResultado(
    numero1: number,
    numero2: number,
    operador: string
  ): number {
    let resultado: number = 0;
    if (operador === "+") {
      resultado = numero1 + numero2;
    } else if (operador === "-") {
      resultado = numero1 - numero2;
    }
    return resultado;
  }

  function dibujarGuiones(cantidad: number): string {
    let guion: string = "-";
    for (let i = 1; i < cantidad; i++) {
      guion = guion + "-";
    }
    return guion;
  }

  console.log(dibujarGuiones(40));
  switch (Number(Operacion.value)) {
    case 1:
      console.log(
        "El resultado de la operación es: " +
          obtenerResultado(Number(Valor1.value), Number(Valor2.value), "+")
      );
      break;
    case 2:
      console.log(
        "El resultado de la operación es: " +
          obtenerResultado(Number(Valor1.value), Number(Valor2.value), "-")
      );
      break;
    default:
      console.log("            FIN DEL PROGRAMA");
  }
  console.log(dibujarGuiones(40));
});
