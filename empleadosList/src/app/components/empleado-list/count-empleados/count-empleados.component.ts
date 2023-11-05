import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Empleado} from 'src/app/models/Empleado';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.scss']
})
export class CountEmpleadosComponent {
  //radioBottonSeleccionado: string = 'empleados';
  //Enviar el sexo elegido a list-empleados
  @Output() pasarSexo = new EventEmitter<string>();
  //Input que vincula los valores de list-emplelados a count empleados
  @Input() empFemeninos: number=0;
  @Input() empMasculino: number=0;
  @Input() empTotal: number=0;
  cosa:number=0;

constructor(){

}
ngOnInit(radios:string): void{
  this.pasarSexo.emit(this.radio);
}

radio: string = 'empleados';
genero: any = [
  'masculino',
  'femenino',
  'empleados'
];
radioChangeHandler (event: any){
  this.radio=event.target.value;
  this.ngOnInit(this.radio)
}
obtiene(sex: string): number{
  if(sex=='masculino'){
    return this.empMasculino;
  }
  if(sex=='femenino'){
    return this.empFemeninos;
  }
  return this.empTotal;

}

}
