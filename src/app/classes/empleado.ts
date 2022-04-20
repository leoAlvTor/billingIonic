import {FacturaCabecera} from "./factura-cabecera";

export class Empleado {
  cedula: string;
  password: string;
  nombre: string;
  titulo: string;
  telefono: string;
  direccion: string;
  maquinaAsignada: number;
  indexActual: number;
  rangoInicial: number;
  rangoFinal: number;
  facturaCabeceraList: [FacturaCabecera];
}
