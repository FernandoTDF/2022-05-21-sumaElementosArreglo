let tamanoArreglo: number = Number(prompt("Ingrese la cantidad de elementos del Arreglo"));
let arregloNumeros:number[] = new Array(tamanoArreglo);
let indice:number;
let sumaElementos:number = 0;

for (indice=0; indice < tamanoArreglo; indice++){
  
  arregloNumeros[indice] = Number(prompt(`Ingrese el valor del elemento
   actual ${indice} de ${tamanoArreglo}`));
  sumaElementos += arregloNumeros[indice];
  console.log(`El valor del elemento ${indice} es ${arregloNumeros[indice]} y
   la suma acumulada es ${sumaElementos}`);
}
