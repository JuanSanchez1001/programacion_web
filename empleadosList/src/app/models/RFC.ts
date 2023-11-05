// clase para calcular el RFC

import { EmpleadoListComponent } from "../components/empleado-list/empleado-list.component";
export class RFC{
    calcrfc(Nombre_completo: string,Apellido_paterno: string,Apellido_materno: string,nacimiento:string): string{
        const letrasApellido = this.tomaApellido(Apellido_paterno,Apellido_materno);
        const letraNombre = this.tomaNombre(Nombre_completo);
        const numNacimiento = this.tomaFecha(nacimiento);

        const rfc=letrasApellido + letraNombre + numNacimiento +"XXX";

        return rfc;
    }
    tomaApellido(Apellido_paterno: string, Apellido_materno: string): string{
        const letrasPaterno = Apellido_paterno.substring(0,2);
        const letrasMaterno = Apellido_materno.substring(0,1);

        //const letrasApellido = letrasPaterno + letrasMaterno

        return letrasPaterno + letrasMaterno;
    }
    tomaNombre(Nombre_completo:string): string{
        const letraNombre = Nombre_completo.substring(0,1);

        return letraNombre;
    }
    tomaFecha(nacimiento:string):string{
        //10/02/2002
        const anioNac = nacimiento.substring(8,10);
        const mesNac = nacimiento.substring(3,5);
        const diaNac = nacimiento.substring(0,2);

        return anioNac + mesNac + diaNac;
    }
}