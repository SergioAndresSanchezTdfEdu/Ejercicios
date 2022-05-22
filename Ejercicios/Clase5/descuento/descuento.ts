let monto: number = Number(dato1.value);
let cantidad: number = Number(dato2.value);
let montoConDescuento: number = 0;
let descuento: number = 0;
let precioTotal: number = 0;
precioTotal = monto * cantidad;
if (precioTotal >= 1000) {
  descuento = (precioTotal * 10) / 100;
  montoConDescuento = precioTotal - descuento;
  console.log("Por gastar más de 1000 tiene un 10% de descuento.");
  console.log("el monto a pagar es: " + montoConDescuento);
} else {
  console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
}
