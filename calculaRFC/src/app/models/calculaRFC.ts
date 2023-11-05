//Clase para el calculo del RFC
export class RFC{
    calcularRFC(Nombre_completo: string,Apellido_paterno: string,Apellido_materno: string,nacimiento:string): string{
        //Tomara las letras del nombre
        let rfc:string="";
        let aux:string="";
        let verifica:string=""

        const letrasNombre = this.calculoNombre(Nombre_completo,Apellido_materno,Apellido_paterno);
        const letrasApe1 = this.CalculoApellidoPater(Nombre_completo,Apellido_materno,Apellido_paterno);
        const letrasApe2 = this.CalculoApellidoMater(Apellido_materno,Apellido_paterno);
        const formFecha = this.CalculoFecha(nacimiento);

        aux = Apellido_paterno + " " + Apellido_materno +" " + Nombre_completo ;

        const clave = this.Homonima(aux.toLocaleUpperCase());

       
        
        rfc = letrasApe1.toLocaleUpperCase() + letrasApe2.toLocaleUpperCase() + letrasNombre.toLocaleUpperCase()
                + formFecha + clave;

        const verificador = this.digitoVerificador(rfc);
        verifica = verificador;

        return rfc + verifica;
    }

    calculoNombre(Nombre:string,Apellido1:string,Apellido2:string):string{
        let letras: string = "";
        //let letras1: string = "";
        //Regla 3
        if(Nombre.substring(0,2) == 'Ll' || Nombre.substring(0,2) == 'Ch'){
            letras = Nombre.substring(0,1);
            //letras1 = Nombre.substring(2,3);
        }
        //Regla 6
        else if(Nombre.substring(0,5) == 'Maria' && Nombre.length>6){
            letras = Nombre.substring(6,7);
        }
        else if(Nombre.substring(0,4)== 'Jose' && Nombre.length>5){
            letras = Nombre.substring(5,6);
        }
        //Regla 7
        else if(Apellido1 == "" || Apellido2 == ""){
            letras = Nombre.substring(0,2)
        }
        else if (Nombre.substring(0,3) == 'DR.'){
             letras = Nombre.substring(3,5);
        }
        //En caso de que no se cumpla se ignnoran las reglas anteriores
        else{
            letras = Nombre.substring(0,1)
        }
        return letras;
    }
    CalculoApellidoPater(Nombre:string,ApellidoMat:string,ApellidoPat:string):string{
        let letras: string = "";
        let letras1:string="";
        let letras2:string="";
        //Regla 3
        if(ApellidoPat.substring(0,2) == 'Ll' || ApellidoPat.substring(0,2) == 'Ch'){
            letras = ApellidoPat.substring(0,1);
            letras1 = ApellidoPat.substring(2,3);
        }
        //Regla 4
        else if(ApellidoPat.length < 3){
            letras = ApellidoPat.substring(0,1);
            letras1 = ApellidoMat.substring(0,1);
            letras2 = Nombre.substring(0,2);
        }
        //Regla 7
        else if(ApellidoMat == ""){
            letras = ApellidoPat.substring(0,2);
        }
        //Para las demás reglas
        else{
            letras = ApellidoPat.substring(0,2);
        }
        return letras + letras1 + letras2;
    }
    CalculoApellidoMater(ApellidoMat:string,ApellidoPat:string):string{
        let letras: string = "";
        let letras1:string="";

        //regla 3
        if(ApellidoMat.substring(0,2) == 'Ll' || ApellidoMat.substring(0,2) == 'Ch'){
            letras = ApellidoMat.substring(0,1);
            //letras1 = ApellidoMat.substring(2,3);
        }
        //Regla 7
        else if(ApellidoPat == ""){
            letras = ApellidoMat.substring(0,2);
        }
        else{
            letras = ApellidoMat.substring(0,1);
        }
        return letras + letras1;
    }
    CalculoFecha(nacimiento:string):string{
        const anioNac = nacimiento.substring(8,10);
        const mesNac = nacimiento.substring(3,5);
        const diaNac = nacimiento.substring(0,2);

        return anioNac + mesNac + diaNac;
    }

    Homonima(NombreCompleto:string){
        let cadena:string="0";
        let mult:number[] = [];
        const anex2:string[] = ["1","2","3","4","5","6","7","8","9","A","B","C","D"
                                ,"E","F","G","H","I","J","k","L","M","N","P","Q"
                                ,"R","S","T","U","V","W","X","Y","Z"];
       
        //Para la tabla de anexo1
        for(let i = 0; i < NombreCompleto.length ;i++){
            if(NombreCompleto[i]=='A'){
                cadena = cadena + "11";
            }else if(NombreCompleto[i]=='B'){
                cadena = cadena + "12";
            }else if (NombreCompleto[i]=='C'){
                cadena = cadena + "13";
            }else if (NombreCompleto[i]=='D'){
                cadena = cadena + "14";
            }else if (NombreCompleto[i]=='E'){
                cadena = cadena + "15";
            }else if (NombreCompleto[i]=='F'){
                cadena = cadena + "16";
            }else if (NombreCompleto[i]=='G'){
                cadena = cadena + "17";
            }else if (NombreCompleto[i]=='H'){
                cadena = cadena + "18";
            }else if (NombreCompleto[i]=='I'){
                cadena = cadena + "19";
            }else if (NombreCompleto[i]=='J'){
                cadena = cadena + "21";
            }else if (NombreCompleto[i]=='K'){
                cadena = cadena + "22";
            }else if (NombreCompleto[i]=='L'){
                cadena = cadena + "23";
            }else if (NombreCompleto[i]=='M'){
                cadena = cadena + "24";
            }else if (NombreCompleto[i]=='N'){
                cadena = cadena + "25";
            }else if (NombreCompleto[i]=='O'){
                cadena = cadena + "26";
            }else if (NombreCompleto[i]=='P'){
                cadena = cadena + "27";
            }else if (NombreCompleto[i]=='Q'){
                cadena = cadena + "28";
            }else if (NombreCompleto[i]=='R'){
                cadena = cadena + "29";
            }else if (NombreCompleto[i]=='S'){
                cadena = cadena + "32";
            }else if (NombreCompleto[i]=='T'){
                cadena = cadena + "33";
            }else if (NombreCompleto[i]=='U'){
                cadena = cadena + "34";
            }else if (NombreCompleto[i]=='V'){
                cadena = cadena + "35";
            }else if (NombreCompleto[i]=='W'){
                cadena = cadena + "36";
            }else if (NombreCompleto[i]=='X'){
                cadena = cadena + "37";
            }else if (NombreCompleto[i]=='Y'){
                cadena = cadena + "38";
            }else if (NombreCompleto[i]=='Z'){
                cadena = cadena + "39";
            }else if (NombreCompleto[i]=='Ñ'){
                cadena = cadena + "40";
            }else if (NombreCompleto[i]==' '){
                cadena = cadena + "00";
            }
        }
        let z:number=2; //Para que empiece desde la posicion 0
    
        while(z <= cadena.length){//Recorre los elementos de cadena
            
            mult.push(parseInt(cadena[z-2] + cadena[z-1]) * parseInt(cadena[z-1]));
            
            //Incremente de variables
            z = z + 1;
        }
        let suma:number=0;
        let aux: number=0;
        let aux1:string="";
        let suma1:string="";
        let cociente:number=0;
        let residup:number=0;
        
        suma = mult.reduce((a,b) => a + b, 0);//Suma los elementos del array
        //Esto se hace para sacar los ultimos 3 elementos
        suma1=suma.toString();
        aux1 = suma1.substring(suma1.length-3);
        //sacar residuo y cociente
        aux=parseInt(aux1);
        let homonimo:string="";

        cociente=Math.trunc(aux/34);
        residup=aux%34;

        //Para la tabla de anexo2
        let letra1:string="";
        let letra2:string="";
        for(let i=0;i<=anex2.length;i++){
            if(cociente==i){
                letra1 = anex2[i];
            }
            if(residup==i){
                letra2=anex2[i];
            }
        }

        return letra1 + letra2;
    }  
    digitoVerificador(rfc:string){
        let digito:number=0;
        let cadena:string="";
        let factor: number = 13;
        let D:number = 0;
        let residuo:number=0;
        let sumaD:number = 0;
        let aux:number=0;

        const anexo3:string[]=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",
                                "G","H","I","J","K","L","M","N","&","O","P","Q","R","S","T","U",
                                "V","W","X","Y","Z"," ","Ñ"];
        for(let i=0; i < rfc.length;i++){
            for(let j=0; j < anexo3.length;j++){
                if(rfc[i]==anexo3[j]){
                    digito = j;
                    D = digito * (factor);
                    factor = factor - 1;
                }
            }
            sumaD = sumaD + D;
            //cadena = cadena + digito.toString();
        }
        residuo = sumaD % 11;

        if(residuo==0){
            cadena = "0";
        }else if(residuo>0){
            aux = 11 - residuo;
            cadena = aux.toString();
        }else if(residuo == 10){
            cadena = "A"
        }

        return cadena;
    }
}