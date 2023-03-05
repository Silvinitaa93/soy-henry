"use strict";

function BinarioADecimal(num) {
  var array = num.split("");
  var num = 0;
  for (var i = 0; i < array.length; i++) {
    num = num + parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
    // ALTERNATIVA:
    // num+=parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
    // num+=array[i] * Math.pow(2, array.length - 1 - i);
    // num+=array[i] * 2 ** (array.length-1-i);
  }
  return num;
}
// ALTERNATIVA:
// function BinarioADecimal(num){
//   var array = num.split("");
//   var sum = 0;
//   var pos = 0;
//   for(var j = array.length-1; j>=0 ; j--){
//     sum+=array[j]*Math.pow(2, pos);
//     pos++;
//   }

//   return sum;
// }
function DecimalABinario(num) {
  if (num <= 0) return "0";

  var binario = [];

  while (num > 0) {
    binario.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return binario.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
