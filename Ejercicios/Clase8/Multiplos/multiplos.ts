document.getElementById("app").innerHTML = `
  <h1>Múltiplos</h1>
  <p>Ingrese el valor 1</p>
  <input type="text" id="valor1" />
  <p>Ingrese el valor 2</p>
  <input type="text" id="valor2" />
  <button id="btnCalcular">Calcular</button>
`;

document.getElementById("btnCalcular").addEventListener("click", () => {
  let Valor1 = document.getElementById("valor1");
  let Valor2 = document.getElementById("valor2");

  function esMultiplo(valor1: number, valor2: number): boolean {
    if (valor1 % valor2 === 0) {
      return true;
    } else return false;
  }

  if (esMultiplo(Number(Valor1.value), Number(Valor2.value)) {
    console.log(
      Number(Valor1.value) + " es múltiplo de " + Number(Valor2.value)
    );
  } else {
    console.log(
      Number(Valor1.value) + " no es múltiplo de " + Number(Valor2.value)
    );
  }
});
