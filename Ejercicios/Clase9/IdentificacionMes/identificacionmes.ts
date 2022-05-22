document.getElementById("app").innerHTML = `
  <h1>Identificación Mes</h1>
  <p>Ingrese el Número del Mes</p>
  <input type="text" id="numeromes" />
  <button id="btnCalcular">Calcular</button>
`;

document.getElementById("btnCalcular").addEventListener("click", () => {
  let NumeroMes = document.getElementById("numeromes");

  function DevolverNombreMes(MesEnNumero: number): string {
    switch (MesEnNumero) {
      case 1:
        return "Enero";
      case 2:
        return "Febrero";
      case 3:
        return "Marzo";
      case 4:
        return "Abril";
      case 5:
        return "Mayo";
      case 6:
        return "Junio";
      case 7:
        return "Julio";
      case 8:
        return "Agosto";
      case 9:
        return "Septiembre";
      case 10:
        return "Octubre";
      case 11:
        return "Noviembre";
      case 12:
        return "Diciembre";
      default:
        return "Número de Mes Erroneo";
    }
  }

  /* Otra Forma de hacer la función DevolverNombreMes
  function DevolverNombreMes(MesEnNumero:number):string{
    let Mes: string = "";
    
      switch (MesEnNumero){
        caso 1: Mes = "Enero";
          break;
        caso 2: Mes = "Febrero";
          break;
        caso 3: Mes = "Marzo";
          break;
        caso 4: Mes = "Abril";
          break;
        caso 5: Mes = "Mayo";
          break;
        caso 6: Mes = "Junio";
          break;
        caso 7: Mes = "Julio";
          break;
        caso 8: Mes = "Agosto";
          break;
        caso 9: Mes = "Septiembre";
          break;
        caso 10: Mes = "Octubre;
           break;
        caso 11: Mes = "Noviembre";
           break;
        caso 12: Mes = "Diciembre";
           break;
        default: return("Número de Mes Erroneo");
    }
    return Mes;
    } 
    */

  if (Number(NumeroMes.value) >= 0 && Number(NumeroMes.value) <= 12) {
    console.log(DevolverNombreMes(Number(NumeroMes.value)));
  } else {
    console.log("El Número de mes ingresado es incorrecto");
  }
});
