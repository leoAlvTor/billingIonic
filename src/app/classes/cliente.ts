import {FacturaCabecera} from './factura-cabecera';
import axios from 'axios';

export class Cliente {
  cedula: string;
  nombre: string;
  telefono: string;
  direccion: string;
  email: string;
  facturaCabeceraList: [FacturaCabecera];

  getCedulas(){
    return axios.get('http://localhost:8080/clientes/cedulas').then(response => response.data);
  }

  public getNombres(){
    return axios.get('http://localhost:8080/clientes/nombres').then(response => response.data);
  }

}
