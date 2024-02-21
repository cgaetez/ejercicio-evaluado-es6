// Importar las clases Cliente e Impuestos
import Cliente from '.modulo/Cliente';
import Impuestos from '.modulo/Impuestos';

// Crear instancia de Impuestos con monto bruto anual y deducciones
const impuestos = new Impuestos(100000, 20000);

// Crear instancias de clientes
const cliente1 = new Cliente("Cliente1", impuestos.montoBrutoAnual, impuestos.deducciones);
const cliente2 = new Cliente("Cliente2", impuestos.montoBrutoAnual, impuestos.deducciones);

// Agregar clientes a la lista de clientes de Impuestos
impuestos.agregarCliente(cliente1);
impuestos.agregarCliente(cliente2);

// Calcular impuesto anual para un cliente específico
const nombreCliente = "Cliente1";
const impuestoAnual = impuestos.calcularImpuestoAnual(nombreCliente);
console.log(`El impuesto anual para ${nombreCliente} es: ${impuestoAnual}`);

//mostrar clientes
impuestos.mostrarClientes(); 