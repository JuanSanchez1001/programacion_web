import { Component } from '@angular/core';
import { RFC } from 'src/app/models/calculaRFC'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nombre: string="";
  fecha: string="";
  apePaterno: string="";
  apeMaterno: string="";

  rfc="";

  generarRfc = new RFC();

  constructor(){

  }
  noOnInit(){

  }

  calcularRFC(){
    this.rfc = this.generarRfc.calcularRFC(this.nombre,this.apePaterno,this.apeMaterno,this.fecha);
  }
}
