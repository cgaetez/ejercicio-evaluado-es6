class Cliente {
    constructor(nombre) {
        this._nombre = nombre
        this._impuesto = null
    }

    get nombre() {
        return this._nombre
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }
    get impuesto() {
        return this._impuesto
    }
    set impuesto(nuevo_impuesto){
        this._impuesto = nuevo_impuesto
    }

    calcularImpuesto(){
        return (this._impuesto.montoBrutoAnual-this._impuesto.deducciones)*0.21;
    }
}
// Exportar la clase Cliente
export default Cliente;
