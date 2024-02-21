"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.description.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
    this.clientes = [];
  }
  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    },
    set: function set(nuevo_montoBrutoAnual) {
      this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nueva_deducciones) {
      this._deducciones = nueva_deducciones;
    }

    // Método para agregar un cliente
  }, {
    key: "agregarCliente",
    value: function agregarCliente(cliente) {
      this.clientes.push(cliente);
    }
    // Método para mostrar los detalles de todos los clientes
  }, {
    key: "mostrarClientes",
    value: function mostrarClientes() {
      this.clientes.forEach(function (cliente) {
        console.log("Nombre: ".concat(cliente.nombre));
        console.log("Monto Bruto Anual: ".concat(cliente._montoBrutoAnual));
        console.log("Deducciones: ".concat(cliente._deducciones));
        console.log("Impuesto: ".concat(cliente.impuesto));
        console.log("---------------------------");
      });
    }
  }]);
  return Impuestos;
}(); // Exportar la clase Impuestos
var _default = exports["default"] = Impuestos;