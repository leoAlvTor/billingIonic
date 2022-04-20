import {Producto} from "./producto";
import {FacturaCabecera} from "./factura-cabecera";

export class FacturaDetalle {
  pseudoID: number;
  id: number;
  producto: Producto;
  cantidad: number;
  total: number;
  representacion: string;
  facturaCabecera: FacturaCabecera;

  // eslint-disable-next-line max-len
  constructor(pseudoID: number, id: number, producto: Producto, cantidad: number, total: number, representacion: string,
              facturaCabecera: FacturaCabecera) {
    this.pseudoID = pseudoID;
    this.id = id;
    this.producto = producto;
    this.cantidad = cantidad;
    this.total = total;
    this.representacion = representacion;
    this.facturaCabecera = facturaCabecera;
  }
}
