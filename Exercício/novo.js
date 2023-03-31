// array com valores Strings
let  array  = ["a", "b", "c"]

// Verificando se contém algum elemento diferente do tipo Number
console.log(array.every(function(elem) {return  typeof  elem  !==  'number';}));