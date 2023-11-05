import { Component } from '@angular/core';
import { Empleado} from 'src/app/models/Empleado';
import { RFC } from 'src/app/models/RFC';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.scss']
})
export class EmpleadoListComponent {
  radioBottonSeleccionado: string = '';

  generarRFC = new RFC();// se instancia la clase RFC

  listEmpleados : Empleado[]=[
    {
    No: 19141141,
    RFC: 'test',
    Nombre_completo:'VANESSA',
    Apellido_paterno:'FERNANDEZ',
    Apellido_materno:'',
    Sexo:'femenino',
    Salario:1000,
    nacimiento: '14/05/2001'
  },
  //segundo elemento
  {
    No: 19141141,
    RFC: 'test',
    Nombre_completo:'ITZEL GUADALUPE',
    Apellido_paterno:'ANDRADE',
    Apellido_materno:'GUTIERREZ',
    Sexo:'femenino',
    Salario:1200,
    nacimiento: '01/03/1999'
  },
  //Tercer elemento
  {
    No: 19141120,
    RFC: 'test',
    Nombre_completo:'KEVIN DANIEL',
    Apellido_paterno:'AVELLANEDA',
    Apellido_materno:'TREJO',
    Sexo:'masculino',
    Salario:8000,
    nacimiento: '14/12/2000'
  },
  //Cuarto elemento
  {
    No: 19141127,
    RFC: 'test',
    Nombre_completo:'SERGIO LEONARDO',
    Apellido_paterno:'CAMPOS',
    Apellido_materno:'RANGEL',
    Sexo:'masculino',
    Salario:15100,
    nacimiento: '30/10/2001'
  },
  //Quinto elemento
  {
    No: 19141129,
    RFC: 'test',
    Nombre_completo:'YAZMIN ALEJANDRA',
    Apellido_paterno:'CASTILLO',
    Apellido_materno:'MARTINEZ',
    Sexo:'femenino',
    Salario:95599,
    nacimiento: '02/04/2001'
  },
  //6
  {
    No: 1914114,
    RFC: 'test',
    Nombre_completo:'LUZ ZAYETZY',
    Apellido_paterno:'GARAY',
    Apellido_materno:'QUINTERO',
    Sexo:'femenino',
    Salario:95599,
    nacimiento: '31/12/2001'
  },
  //7
  {
    No: 19141130,
    RFC: 'test',
    Nombre_completo:'FIDEL',
    Apellido_paterno:'LUNAREZ',
    Apellido_materno:'ROKEFELER',
    Sexo:'masculino',
    Salario:3200,
    nacimiento: '02/04/2001'
  },
  //8
  {
    No: 19141131,
    RFC: 'test',
    Nombre_completo:'Daniel',
    Apellido_paterno:'Jimenez',
    Apellido_materno:'Galvan',
    Sexo:'masculino',
    Salario:95599,
    nacimiento: '10/03/2001'
  },
  //9
  {
    No: 19141132,
    RFC: 'test',
    Nombre_completo:'JESUS',
    Apellido_paterno:'CHAVEZ',
    Apellido_materno:'ARIAS',
    Sexo:'masculino',
    Salario:12000,
    nacimiento: '19/01/2001'
  },
  //10
  {
    No: 19141133,
    RFC: 'test',
    Nombre_completo:'DANIEL ALEJANDRO',
    Apellido_paterno:'CUEVAS',
    Apellido_materno:'TELLEZ',
    Sexo:'masculino',
    Salario:4506,
    nacimiento: '18/07/1999'
  },
  //11
  {
    No: 19141132,
    RFC: 'test',
    Nombre_completo:'DALIA',
    Apellido_paterno:'RESENDIZ',
    Apellido_materno:'MARTINEZ',
    Sexo:'femenino',
    Salario:13520,
    nacimiento: '04/04/2001'
  },
  //12
  {
    No: 19141133,
    RFC: 'test',
    Nombre_completo:'ALEJANDRO',
    Apellido_paterno:'VILLEGAZ',
    Apellido_materno:'ROSAS',
    Sexo:'masculino',
    Salario:16789,
    nacimiento: '24/04/2000'
  },
  //13
  {
    No: 19141134,
    RFC: 'test',
    Nombre_completo:'GUADALUPE',
    Apellido_paterno:'RESENDIZ',
    Apellido_materno:'SILVA',
    Sexo:'femenino',
    Salario:5645,
    nacimiento: '12/12/1999'
  },
  //14
  {
    No: 19141135,
    RFC: 'test',
    Nombre_completo:'EMMANUEL',
    Apellido_paterno:'ABIF',
    Apellido_materno:'MEJIA',
    Sexo:'masculino',
    Salario:15432,
    nacimiento: '25/06/1997'
  },
  //15
  {
    No: 19141136,
    RFC: 'test',
    Nombre_completo:'BRAYAN',
    Apellido_paterno:'SANCHEZ',
    Apellido_materno:'RAFAEL',
    Sexo:'masculino',
    Salario:2090,
    nacimiento: '14/02/2001'
  },
  //16
  {
    No: 19141137,
    RFC: 'test',
    Nombre_completo:'VERONICA',
    Apellido_paterno:'SILVA',
    Apellido_materno:'MARTINEZ',
    Sexo:'femenino',
    Salario:13209,
    nacimiento: '17/08/1998'
  },
  //17
  {
    No: 19141138,
    RFC: 'test',
    Nombre_completo:'KEVAN',
    Apellido_paterno:'AVELLANEDA',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:14056,
    nacimiento: '16/09/2001'
  },
  //18
  {
    No: 19141139,
    RFC: 'test',
    Nombre_completo:'MAURICIO',
    Apellido_paterno:'MENDEZ',
    Apellido_materno:'CUEVAS',
    Sexo:'masculino',
    Salario:12453,
    nacimiento: '30/04/2001'
  },
  //19
  {
    No: 19141140,
    RFC: 'test',
    Nombre_completo:'FRENIA',
    Apellido_paterno:'MENDEZ',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:20549,
    nacimiento: '27/11/2001'
  },
  //20
  {
    No: 19141141,
    RFC: 'test',
    Nombre_completo:'ISAAC',
    Apellido_paterno:'HERNANDEZ',
    Apellido_materno:'RESENDIZ',
    Sexo:'masculino',
    Salario:64050,
    nacimiento: '09/04/2000'
  },
  //21
  {
    No: 19141142,
    RFC: 'test',
    Nombre_completo:'CESAR ADAN',
    Apellido_paterno:'CUEVAS',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:12435,
    nacimiento: '19/09/2001'
  },
  //22
  {
    No: 19141143,
    RFC: 'test',
    Nombre_completo:'MARIANA',
    Apellido_paterno:'CASTILLO',
    Apellido_materno:'MARTINEZ',
    Sexo:'femenino',
    Salario:95599,
    nacimiento: '02/04/2001'
  },
  //23
  {
    No: 19141144,
    RFC: 'test',
    Nombre_completo:'FROYLAND',
    Apellido_paterno:'MARTINEZ',
    Apellido_materno:'GALLEGOZ',
    Sexo:'masculino',
    Salario:154342,
    nacimiento: '03/03/2001'
  },
  //24
  {
    No: 19141145,
    RFC: 'test',
    Nombre_completo:'EDUARDO',
    Apellido_paterno:'MORALES',
    Apellido_materno:'FLORES',
    Sexo:'masculino',
    Salario:30459,
    nacimiento: '10/04/2000'
  },
  //25
  {
    No: 19141146,
    RFC: 'test',
    Nombre_completo:'VALERIA',
    Apellido_paterno:'NUÑEZ',
    Apellido_materno:'TORREZ',
    Sexo:'femenino',
    Salario:95599,
    nacimiento: '12/04/1999'
  },
  //26
  {
    No: 19141147,
    RFC: 'test',
    Nombre_completo:'LUIS',
    Apellido_paterno:'ZARATE',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:95599,
    nacimiento: '02/12/2001'
  },
  //27
  {
    No: 19141148,
    RFC: 'test',
    Nombre_completo:'VANESSA',
    Apellido_paterno:'LOPEZ',
    Apellido_materno:'RODRIGUEZ',
    Sexo:'femenino',
    Salario:123456,
    nacimiento: '26/07/2001'
  },
  //28
  {
    No: 19141149,
    RFC: 'test',
    Nombre_completo:'CHRISTIAN JOSUE',
    Apellido_paterno:'RAMIREZ',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:5469,
    nacimiento: '29/04/2001'
  },
  //29
  {
    No: 19141150,
    RFC: 'test',
    Nombre_completo:'MARCO',
    Apellido_paterno:'CASTILLO',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:14503,
    nacimiento: '02/04/2001'
  },
  //30
  {
    No: 19141151,
    RFC: 'test',
    Nombre_completo:'PAOLA',
    Apellido_paterno:'LOPEZ',
    Apellido_materno:'HERNANDEZ',
    Sexo:'femenino',
    Salario:95599,
    nacimiento: '02/08/2001'
  },
  //31
  {
    No: 19141152,
    RFC: 'test',
    Nombre_completo:'PAOLA GUADALUPE',
    Apellido_paterno:'SANCHEZ',
    Apellido_materno:'MEDINA',
    Sexo:'femenino',
    Salario:12342,
    nacimiento: '12/09/1999'
  },
  //32
  {
    No: 19141153,
    RFC: 'test',
    Nombre_completo:'LEON',
    Apellido_paterno:'CASTILLO',
    Apellido_materno:'MARTINEZ',
    Sexo:'masculino',
    Salario:9879,
    nacimiento: '04/05/2001'
  },
  //33
  {
    No: 19141154,
    RFC: 'test',
    Nombre_completo:'ESTEFANIA',
    Apellido_paterno:'SANCHEZ',
    Apellido_materno:'TREJO',
    Sexo:'femenino',
    Salario:8768,
    nacimiento: '05/11/2001'
  }
]
constructor(){

}
ngOnInit(){

}
//Pasa a count-empleado-list la cantidad de empleados filtrados
pasarTotalEmp: number = this.listEmpleados.length;
pasarEmpFemenino: number = this.listEmpleados.filter(list => list.Sexo == 'femenino').length;
pasarEmpMasculino: number = this.listEmpleados.filter(list => list.Sexo == 'masculino').length;

obtenerTotalEmpleados(sex: string):number
{
  if(sex=='masculino'){
    return this.listEmpleados.filter(list => list.Sexo == 'masculino').length;
  }
  if(sex=='femenino'){
    return this.listEmpleados.filter(list => list.Sexo == 'femenino').length;
  }
  return this.listEmpleados.length;
}

obtiene(event:string){
  this.radioBottonSeleccionado=event;
}

calculaRFC(empleado: Empleado): string{
  const rfc = this.generarRFC.calcrfc(empleado.Nombre_completo,empleado.Apellido_paterno,empleado.Apellido_materno,
    empleado.nacimiento);
    return rfc;
}
}


