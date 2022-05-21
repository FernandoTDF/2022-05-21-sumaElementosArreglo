let tamanoArreglo: number = Number(prompt("Ingrese la cantidad de elementos del Arreglo"));
let arregloNumeros:number[] = new Array(tamanoArreglo);
let indice:number;
let elementoActual:number;
let sumaElementos:number = 0;

for (indice=0; indice < tamanoArreglo; indice++){
  
  elementoActual = Number(prompt(`Ingrese el valor del elemento actual ${indice} de ${tamanoArreglo}`));
  sumaElementos += elementoActual;
  console.log(`El valor del elemento ${indice} es ${elementoActual} y la suma acumulada es ${sumaElementos}`);

}
