class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
        this._nombre = nombre
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
        this._impuesto = 0
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

    calcularImpuesto(){
        this._impuesto = (this._montoBrutoAnual - this._deducciones) * 0.21;
    }
}
// Exportar la clase Cliente
module.exports = Cliente;
