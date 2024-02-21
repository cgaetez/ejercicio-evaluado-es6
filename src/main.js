// Importar las clases Cliente e Impuestos
import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

let persona1 = new Cliente('Claudia'); 
let impuesto = new Impuestos(100000,0);

persona1.impuesto = impuesto;

console.log(persona1);
console.log(`El impuesto a pagar de ${persona1.nombre} es ${persona1.calcularImpuesto()}`);