document.getElementById("app").innerHTML = `
  <h1>Multiplos de 2 y 3</h1>
  `;

for (let i: number = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " es multiplo de 2");
  } else if (i % 3 === 0) {
    console.log(i + " es multiplo de 3");
  }
}
