"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importar las clases Cliente e Impuestos

var persona1 = new _cliente["default"]('Claudia');
var impuesto = new _impuestos["default"](100000, 0);
persona1.impuesto = impuesto;
console.log(persona1);
console.log("El impuesto a pagar de ".concat(persona1.nombre, " es ").concat(persona1.calcularImpuesto()));