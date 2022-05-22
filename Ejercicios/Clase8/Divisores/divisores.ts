document.getElementById("app").innerHTML = `
  <h1>Divisores</h1>
  <p>Ingrese el valor 1</p>
  <input type="text" id="valor1" />
  <button id="btnCalcular">Calcular</button>
`;

document.getElementById("btnCalcular").addEventListener("click", () => {
  let Valor1 = document.getElementById("valor1");
  
  function esMultiplo(valor1: number, valor2: number): boolean {
    if (valor1 % valor2 === 0) {
      return true;
    } else return false;
  }

  function cantidadDeDivisores(numero: number) : number {
    let CantidadMultiplos: number = 0;
    for (let i:number = 1; i <= numero; i++) {
      if (esMultiplo(numero, i) {
        CantidadMultiplos++;      
      }
    }
    return CantidadMultiplos;
  }

  console.log(Number(Valor1.value) + " tiene " + cantidadDeDivisores(Number(Valor1.value)) + " divisores");
});