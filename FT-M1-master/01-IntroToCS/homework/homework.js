'use strict';

function BinarioADecimal(num) {
   let sum = 0;
   for (let i=0; i<num.length; i++){
      sum+=num[i]*2**(num.length-1-i);
   }
   return  sum;
  // return parseInt(num,2);
 
}

function DecimalABinario(num) {

   // return num.toString(2);

   let almacenador = []
    while (num!==0){
        let residuo = num%2
        num = Math.floor(num/2);
        almacenador.push(residuo);}

        let numeroreversa = almacenador.reverse().join('')
        return numeroreversa

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
