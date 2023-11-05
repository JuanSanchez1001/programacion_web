import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cear-citas',
  templateUrl: './cear-citas.component.html',
  styleUrls: ['./cear-citas.component.css']
})
export class CearCitasComponent {
  nombre: string="";
  fecha: string="";
  hora: string="";
  sintomas:string="";

  formularioIncorrecto: boolean = false;
  @Output() nuevaCita = new EventEmitter<any>();
  
  constructor(){

  }
  ngOnInit(){

  }
  agregarCita(){
    if(this.nombre=='' || this.fecha=='' || this.hora=='' || this.sintomas==''){
      this.formularioIncorrecto=true;
      return;
    }
    this.formularioIncorrecto=false;

    const CITA=
    {
      nombre: this.nombre,
      fecha:this.fecha,
      hora:this.hora,
      sintomas:this.sintomas
    }
    console.log('soy el hijo');
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }
  resetCampos(){
    this.nombre='';
    this.fecha='';
    this.hora='';
    this.sintomas='';
  }
}
