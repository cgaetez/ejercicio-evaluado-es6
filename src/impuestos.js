
class Impuestos{
    constructor(montoBrutoAnual,deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
        this.clientes = [];
    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(nuevo_montoBrutoAnual){
        this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }

    get deducciones(){
        return this._deducciones;
    }
    set deducciones(nueva_deducciones){
        this._deducciones = nueva_deducciones;
    }

     // Método para agregar un cliente
     agregarCliente(cliente) {
        this.clientes.push(cliente);
    }
    // Método para mostrar los detalles de todos los clientes
    mostrarClientes() {
        this.clientes.forEach(cliente => {
            console.log(`Nombre: ${cliente.nombre}`);
            console.log(`Monto Bruto Anual: ${cliente._montoBrutoAnual}`);
            console.log(`Deducciones: ${cliente._deducciones}`);
            console.log(`Impuesto: ${cliente.impuesto}`);
            console.log("---------------------------");
        });
    }

}


// Exportar la clase Impuestos
export default Impuestos;