import {Cliente} from "./cliente";
import {FacturaDetalle} from "./factura-detalle";
import {Empleado} from "./empleado";

export class FacturaCabecera {
  id: number;
  cliente: Cliente;
  tipo: string;
  gregorianCalendar: Date;
  subtotal: number;
  subtotal0: number;
  iva: number;
  descuento: number;
  total: number;
  anulada: string;
  valorCancelado: number;
  cambio: number;

  empleado: Empleado;
  facturaDetalleList: [FacturaDetalle];
  retencionVentaCabecera: null;
}
