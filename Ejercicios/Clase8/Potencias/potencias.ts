document.getElementById("app").innerHTML = `
  <h1>Potencias</h1>
  <p>Ingrese el valor de la Base</p>
  <input type="text" id="base" />
  <p>Ingrese el valor del Exponente</p>
  <input type="text" id="exponente" />
  <button id="btnCalcular">Calcular</button>
`;

document.getElementById("btnCalcular").addEventListener("click", () => {
  let Base = document.getElementById("base");
  let Exponente = document.getElementById("exponente");

  function calcularExponente(base: number, exponente: number): number {
    return base ** exponente;
  }

  if (Number(Exponente.value) >= 0) {
    console.log(
      "El resultado de " +
        Number(Base.value) +
        "^" +
        Number(Exponente.value) +
        " es: " +
        calcularExponente(Number(Base.value), Number(Exponente.value))
    );
  } else {
    console.log("El exponente debe ser igual o mayor a 0");
  }
});
