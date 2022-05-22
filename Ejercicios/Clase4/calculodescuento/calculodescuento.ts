document.getElementById("app").innerHTML = `
  <h1>Calcular descuento del 10% a $ 450.50</h1>
  <p id="descuento"></p>
`;

let precioProducto: number = 450.5;
let porcentajeDescuento: number = 0.1; // 10%
let descuento: number = precioProducto * porcentajeDescuento;
let resultado: number = precioProducto - descuento;

console.log("Resultado: $", resultado);
document.getElementById("descuento").innerHTML = "Resultado: $" + resultado;
