/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
devolverPrimerElemento['Hola', 'Como', 'Estas'];

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  
   return array[array.length -1];
}
devolverUltimoElemento[1, 2, 3, 4, 5];
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
obtenerLargoDelArray['soy','un', 'arreglo', 'de', 'string'];

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var sumaUno = array.map( (num) => {
      return num + 1});
   return sumaUno;
}
incrementarPorUno[3, 4, 5, 67, 76, 88];

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
agregarItemAlFinalDelArray['h', 1, 3, 'hola'];
var elemento = 's';

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
agregarItemAlComienzoDelArray['e', 'i', 'o', 'u'];
var elemento = 'a';

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var string = palabras.join(' ');
   return string;
}
dePalabrasAFrase['Hello', 'world!'];

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var existe = array.includes(elemento);
   if ( existe === true){
      return true;
   } else{
      return false;
   }
}
arrayContiene['Hola', 'Mundo!'];
var elemento = 'Hola';

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   for( let i = 0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i]; 
   }
   return suma;
}
agregarNumeros[1, 2, 3, 4, 66, 77];

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   for (let i = 0; i < resultadosTest.length; i++){
      var suma = suma + resultadosTest[i];
   }
   var promedio = suma / resultadosTest.length;
   return promedio;
}
promedioResultadosTest[5, 8, 23, 45, 77];

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numMayor = Math.max(...arrayOfNums);
   return numMayor;
}
numeroMasGrande[5, 66, 88, 2, 8, 16];

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicar = 1;
   if (arguments.length === 0){
      return 0;
   }
   for(let i = 0; i < arguments.length; i++){
       multiplicar = multiplicar * arguments[i];
   }
   return multiplicar;
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var conteo = 0;
   for( let i = 0; i < array.length; i++){
      if (array[i] > 18){
         conteo = conteo + 1;
      }
   }
   return conteo;
}
cuentoElementos[15, 18, 22, 55, 8];

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia > 7 || numeroDeDia < 1){
      return null;
   }else{
      switch(numeroDeDia) {
         case 7:
            return 'Es fin de semana'; 
            break;
         case 1:
            return 'Es fin de semana';
            break;
         default:
            return 'Es dia laboral';
      }
   }
}
diaDeLaSemana(1);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var convertir = [num];
   var convertirString = convertir.join('');
   var convertirArray = convertirString.split('');
   if (convertirArray[0] === '9'){
      return true;
   } else{
      return false;
   }
}
empiezaConNueve(9);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var cumpleCondicion = array.every( (element) => {
      return element === array[0]
   });
   return cumpleCondicion;
}
todosIguales[5, 5, 5, 5];

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];

   for(let i = 0; i < array.length; i++){
      if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
         meses.push(array[i]);
      }
   }
   if(meses.length === 3){
      return meses;
   }else{
      return 'No se encontraron los meses pedidos';
   }

}
mesesDelAño['Enero', 'Julio', 'Abril', 'Marzo', 'Octubre', 'Noviembre'];

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   
   for(let i = 0; i < 11; i++){
      var producto = 6 * i;
      tabla.push(producto);
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var encontrarValores = array.filter(valor => (valor > 100));
   return encontrarValores;
}
mayorACien[100, 104, 180, 190, 200];

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let i = 0;
   var array = [];
   while(i < 10){
      num = num + 2; 
      i = i + 1;
      array.push(num);

      if( num == i){
         return 'Se interrumpió la ejecución';
         break;  
      };
   }
   return array;
}
breakStatement(4);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let i = 0;
   var array = [];
   while(i < 10){
      i = i + 1;

      if( i === 5){
         continue;
      }
      num = num + 2;
      array.push(num); 

   }
   return array;
}
continueStatement(7);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
