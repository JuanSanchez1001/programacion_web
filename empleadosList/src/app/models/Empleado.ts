import { EmpleadoListComponent } from "../components/empleado-list/empleado-list.component";
export class Empleado{
    No: number = 0;
    RFC: string = "";
    Nombre_completo: string = "";
    Apellido_paterno: string = "";
    Apellido_materno: string = "";
    Sexo: string = "";
    Salario: number = 0;
    nacimiento: string = "";
    constructor(
        No: number,
        RFC: string,
        Nombre_completo:string,
        Apellido_paterno:string,
        Apellido_materno:string,
        Sexo:string,
        Salario:number,
        nacimiento:string){
            this.No = No;
            this.RFC = RFC;
            this.Nombre_completo = Nombre_completo;
            this.Apellido_paterno = Apellido_paterno;
            this.Apellido_materno = Apellido_materno;
            this.Sexo = Sexo;
            this.Salario = Salario;
            this.nacimiento = nacimiento;

    }
}