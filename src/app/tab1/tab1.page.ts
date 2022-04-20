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
    this.cliente = new Cliente(null);
    this.getDatosCliente();

  }

  async getDatosCliente() {
    this.cedulas = await this.cliente.getCedulas();
    this.nombres = await this.cliente.getNombres();
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

  async buscarPorCedula(cedula){
    const loading = await this.loadingController.create({
      message: 'Buscando cliente por cédula...'
    });
    loading.present().then(
      async ()=>{
        this.cliente = new Cliente(await this.cliente.buscarCedula(cedula));
      }
    ).then(async ()=>{
      await loading.dismiss();
    });
  }

  async buscarPorNombre(nombre){
    const loading = await this.loadingController.create({
      message: 'Buscando cliente por nombre...'
    });
    loading.present().then(
      async ()=>{
        this.cliente = new Cliente(await this.cliente.buscarNombre(nombre));
      }
    ).then(async () =>{
      await loading.dismiss();
    });
  }

}
