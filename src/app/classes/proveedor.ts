import {Producto} from "./producto";

export class Proveedor {

  ruc: string;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  observaciones: string;

  productoListo: [Producto];

}
