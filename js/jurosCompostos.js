// F = valor futuro (muitas vezes chamado de M ou "montante")
// P = valor presente (muitas vezes chamado de "principal")
// n = número de períodos (em dias, meses, anos, ... dependendo do contexto)
// i = taxa de juros (normalmente na forma percentual)
// J = juros

let p = 100;
let i = 0.10;
let n = 12;


let f = p*(1 + i)**n;

// console.log(Math.round(f));
console.log(f.toFixed(2));
