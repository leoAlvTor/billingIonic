import {Proveedor} from "./proveedor";

export class Producto {
  codigo: string;
  codigoPrincipal: string;
  nombre: string;
  nombrePrincipal: string;
  fecha: Date;
  proveedor: Proveedor;
  categoria: string;
  representacion: string;
  cantidadInterna: number;
  stockPaquete: number;
  stockUnitario: number;
  precioCaja: number;
  precioUnitario: number;
  impuesto: string;
  precioCaja12: number;
  precioUnitario12: number;
  precioVentaCaja: number;
  precioVentaUnidad: number;

  constructor(codigo: string, codigoPrincipal: string, nombre: string, nombrePrincipal: string, fecha: Date,
              proveedor: Proveedor, categoria: string, representacion: string, cantidadInterna: number,
              stockPaquete: number, stockUnitario: number, precioCaja: number, precioUnitario: number,
              impuesto: string, precioCaja12: number, precioUnitario12: number, precioVentaCaja: number,
              precioVentaUnidad: number) {
    this.codigo = codigo;
    this.codigoPrincipal = codigoPrincipal;
    this.nombre = nombre;
    this.nombrePrincipal = nombrePrincipal;
    this.fecha = fecha;
    this.proveedor = proveedor;
    this.categoria = categoria;
    this.representacion = representacion;
    this.cantidadInterna = cantidadInterna;
    this.stockPaquete = stockPaquete;
    this.stockUnitario = stockUnitario;
    this.precioCaja = precioCaja;
    this.precioUnitario = precioUnitario;
    this.impuesto = impuesto;
    this.precioCaja12 = precioCaja12;
    this.precioUnitario12 = precioUnitario12;
    this.precioVentaCaja = precioVentaCaja;
    this.precioVentaUnidad = precioVentaUnidad;
  }
}
