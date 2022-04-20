import {FacturaCabecera} from './factura-cabecera';
import axios from 'axios';

export class Cliente {
  cedula: string;
  nombre: string;
  telefono: string;
  direccion: string;
  email: string;
  facturaCabeceraList: [FacturaCabecera];

  constructor(data) {
    Object.assign(this, data);
  }

  getCedulas(){
    return axios.get('http://localhost:8080/clientes/cedulas').then(response => response.data);
  }

  getNombres(){
    return axios.get('http://localhost:8080/clientes/nombres').then(response => response.data);
  }

  buscarCedula(cedula){
    return axios.get('http://localhost:8080/clientes/cedulas/'+cedula).then(response => response.data);
  }

  buscarNombre(nombre){
    return axios.get('http://localhost:8080/clientes/nombres/'+nombre).then(response => response.data);
  }

}
