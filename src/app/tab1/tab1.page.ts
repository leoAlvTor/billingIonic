import {Component, ViewChild} from '@angular/core';
import {Cliente} from '../classes/cliente';
import {filter} from "rxjs/operators";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Cliente
  cliente: Cliente;

  cedulas = null;
  cedulasFiltradas = null;
  cedulasItems = null;
  cedula = '';

  nombres = null;
  nombresFiltrados = null;
  nombresItems = null;
  nombre: string;

  @ViewChild('buscar_cedula') buscarCedula: any;
  @ViewChild('buscar_nombre') buscarNombre: any;

  constructor(public loadingController: LoadingController) {
    this.cliente = new Cliente();
    this.getDatosCliente();

  }

  async getDatosCliente() {
    this.cedulas = await this.cliente.getCedulas();
    this.nombres = await this.cliente.getNombres();
    this.cedulas = ['0105652747', '0101130862', '0102488383', '9485833', '9999999999'];
    this.nombres = ['Leo Alvarado', 'Kevin Cordero', 'Israel Chuchuca', 'Betty Pinzon'];
    this.cedulasFiltradas = this.cedulas;
    this.nombresFiltrados = this.nombres;
  }

  async filtrarClienteCedula() {
    const loading = await this.loadingController.create({
      message: 'Buscando...'
    });
    loading.present().then(
      async ()=>{
        this.cedulasFiltradas = this.cedulas.filter(item => item.indexOf(this.cedula) > -1);
      }
    ).then(async ()=>{
      await loading.dismiss();
      this.buscarCedula.setFocus();
    });
  }

  async filtrarClienteNombre(){
    const loading = await this.loadingController.create({
      message: 'Buscando...'
    });
    loading.present().then(
      async ()=>{
        this.nombresFiltrados = this.nombres.filter(item => item.toLowerCase().indexOf(this.nombre.toLowerCase()) > -1);
      }
    ).then(async ()=>{
      await loading.dismiss();
      this.buscarNombre.setFocus();
    });
  }



}
