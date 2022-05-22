document.getElementById("app").innerHTML = `
  <h1>Triángulos</h1>
  <p>Ingrese el valor de la Base del Triángulo</p>
  <input type="text" id="base" />
  <p>Ingrese el valor de la Altura del Triángulo</p>
  <input type="text" id="altura" />
  <button id="btnCalcular">Calcular</button>
`;

document.getElementById("btnCalcular").addEventListener("click", () => {
  let Base = document.getElementById("base");
  let Altura = document.getElementById("altura");

  function calcularAreaTriangulo(base: number, altura: number): number {
    return (base * altura) / 2;
  }

  console.log(
    "El área del triángulo es: " +
      calcularAreaTriangulo(Number(Base.value), Number(Altura.value))
  );
});
