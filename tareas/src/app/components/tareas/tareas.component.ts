import { Component } from '@angular/core';
import {Tarea} from 'src/models/Tarea'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
listTareas: Tarea[] = [];
nombreTarea = '';
keyStorage :string='todos';

constructor(){

}
ngOnInit():void {
  const localStorageItem = localStorage.getItem(this.keyStorage);
  if(!localStorageItem){
  localStorage.setItem(this.keyStorage,JSON.stringify([]));
  }
  else {
  this.listTareas = JSON.parse(localStorageItem);
  }
  
}
agregarTarea()
{
  //console.log(this.nombreTarea);
    const tarea: Tarea={
      nombre: this.nombreTarea,
      estado: false
    }
  this.listTareas.push(tarea);
  this.nombreTarea="";
  localStorage.setItem(this.keyStorage, JSON.stringify(this.listTareas));
}
eliminarTarea(index: number): void{
  this.listTareas.splice(index,1);
  localStorage.setItem(this.keyStorage, JSON.stringify(this.listTareas));
}
actualizarTarea(tarea: Tarea, index: number){
  this.listTareas[index].estado =!tarea.estado;
  localStorage.setItem(this.keyStorage, JSON.stringify(this.listTareas));
}

}
