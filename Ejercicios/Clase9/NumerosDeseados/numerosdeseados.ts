document.getElementById("app").innerHTML = `
  <h1>Números Deseados</h1>
`;

let NumeroDeseado: number[] = new Array(5);
let Numero: number;

for (let i: number = 0; i < 5; i++) {
  Numero = Number(
    prompt(`Indique el número que desea incorporar en la posición ${i}: `)
  );
  NumeroDeseado[i] = Numero;
}

for (let i: number = 0; i < 5; i++) {
  console.log(`El número en la posición ${i} es ${NumeroDeseado[i]}`);
}
