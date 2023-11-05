import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent {
  bmi:number=0;
  resultado: string="Resultado";
  interpretacion:string="Interpretacion";
  constructor(private route: ActivatedRoute){
    this.bmi=+route.snapshot.paramMap.get('valor')!;
  }
  ngOnInit(): void{
    this.getResultado();
  }
  getResultado(){
    if(this.bmi>=25){
      this.resultado="Exceso de peso";
      this.interpretacion="Tiene un peso superior al normal, haga ejercicio :)";
    }else if(this.bmi>=18.5){
      this.resultado="Nomral";
      this.interpretacion="Tiene un peso normal";
    }else{
      this.resultado="Bajo peso";
      this.interpretacion="Tiene un peso mas abajo de lo normal, intente comer mas!!";
    }
  }
}
