'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // pivot aleatorio
  //izquierdas pivot derechas
  // izquierda.concat[1].concat[2]

  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let left = []; 
  let right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //math.floor(.length/2)
  // dividir
  // una
  // unir 1 y 2
  // Base case
  if (array.length <= 1) return array
  let mid = Math.floor(array.length / 2)
  // Recursive calls
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))
  return merge(mergeSort(left), mergeSort(right))
  //okey probemos ahora

  function merge(leftArr, rightArr) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        resultArray.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    
    if (leftArr[leftIndex]) {	
      var unaddedElements = leftArr.slice(leftIndex)
      resultArray.push(...unaddedElements); 
    } else {
      var unaddedElements = rightArr.slice(rightIndex)
      resultArray.push(...unaddedElements); 
    }
    
    return resultArray;
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
