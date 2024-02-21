"use strict";

var _Cliente = _interopRequireDefault(require(".modulo/Cliente"));
var _Impuestos = _interopRequireDefault(require(".modulo/Impuestos"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importar las clases Cliente e Impuestos

// Crear instancia de Impuestos con monto bruto anual y deducciones
var impuestos = new _Impuestos["default"](100000, 20000);

// Crear instancias de clientes
var cliente1 = new _Cliente["default"]("Cliente1", impuestos.montoBrutoAnual, impuestos.deducciones);
var cliente2 = new _Cliente["default"]("Cliente2", impuestos.montoBrutoAnual, impuestos.deducciones);

// Agregar clientes a la lista de clientes de Impuestos
impuestos.agregarCliente(cliente1);
impuestos.agregarCliente(cliente2);

// Calcular impuesto anual para un cliente específico
var nombreCliente = "Cliente1";
var impuestoAnual = impuestos.calcularImpuestoAnual(nombreCliente);
console.log("El impuesto anual para ".concat(nombreCliente, " es: ").concat(impuestoAnual));

//mostrar clientes
impuestos.mostrarClientes();