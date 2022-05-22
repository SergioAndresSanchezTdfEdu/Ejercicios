document.getElementById("app").innerHTML = `
  <h1>Arreglo de Números</h1>
`;

let Num: string[] = [20, 14, 8, 0, 5, 19, 24];

for (let i: number = 0; i <= 6; i++) {
  console.log("El número en la posición " + i + " es " + Num[i]);
}
