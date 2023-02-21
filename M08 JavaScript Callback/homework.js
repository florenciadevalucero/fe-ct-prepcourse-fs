/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   /////// Hay que entender que javascript trata los strings como si fueran arrays
   ////// 
   //Metodo de string: toUpperCase convierte en mayuuscula,
   let letraPrimera = nombre[0].toUpperCase();
   for(let i = 1; i < nombre.length; i++){
      letraPrimera = letraPrimera + nombre[i];
   }
   return letraPrimera;  
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
   //simplemente la invoca a la funcion cb.
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma = 0;
   for(let i = 0; i < arrayOfNumbers.length; i++){
      suma = suma + arrayOfNumbers[i];
   }
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach( (Element) => { //forEach recorre el elemento y por cada uno hace una acccion // en este caso invoca una funcion callback
      cb(Element)
   });
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   //La diferencia del forEach, el map nos permite recorrer un arreglo y 
   //hacer una accion por cada elemento PERO tambien nos devuelve un nuevo
   //arreglo los elementos modificados.
   var arrayNuevo = array.map((Element)=>{
      return cb(Element) //con el return guardamos los resultados devueltos por callback
   });
   return arrayNuevo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var cumplenCondicion = arrayOfStrings.filter((word) =>
      (word[0] === 'a')
   );
   return cumplenCondicion;
   //El metodo filter  crea un nuevo array con todos los elementos que cumplan con la condicion implementada por la funcion dada


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
