import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.scss']
})
export class ConvertidorComponent {
  cantidad: number =0;
  tengo: string = "USD";
  quiero: string ="EUR";
  total: number =0;

  monedas: string[]=['USD','EUR','LIBRA'
                    ,'MXN','KES','Yenn','CUP',
                    'ARS','CNH','AFN']

  constructor(){

  }
  ngOnInit(): void{

  }
  convertir(): void
  {
    switch(this.tengo){
      case 'USD':
        if(this.quiero=='USD')
        {this.total=this.cantidad;}
        if(this.quiero=='EUR')
        {this.total=this.cantidad * 0.84;}
        if(this.quiero=='LIBRA')
        {this.total=this.cantidad * 0.75;}
        if(this.quiero=='MXN')
        {this.total=this.cantidad * 19.03;}
        if(this.quiero=='KES')
        {this.total=this.cantidad * 3749.02;}
        if(this.quiero=='Yenn')
        {this.total=this.cantidad * 133.0;}
        if(this.quiero=='CUP')
        {this.total=this.cantidad * 24.03;}
        if(this.quiero=='ARS')
        {this.total=this.cantidad * 202.58;}
        if(this.quiero=='CNH')
        {this.total=this.cantidad * 6.91;}
        if(this.quiero=='AFN')
        {this.total=this.cantidad * 88.0;}
        break;
        case 'EUR':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 1.06;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.88;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 20.09;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 137.26;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 130.39;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 25.35;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 213.73;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 7.29;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 92.82;}
          break;
          case 'LIBRA':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 1.21;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 1.14;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 22.88;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 156.94;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 160.97;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 28.98;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 244.07;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 8.32;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 106.0;}
          break;
          case 'MXN':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.053;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.050;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.044;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 197.73;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 7.05;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 1.27;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 10.69;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 0.36;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 4.64;}
          break;
          case 'KES':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.0077;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.0073;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.0064;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 0.15;}
          if(this.quiero=='KES')
          {this.total=this.cantidad;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 1.03;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 0.18;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 1.56;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 0.053;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 0.68;}
          break;
          case 'Yenn':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.0075;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.0071;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.0062;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 0.14;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 0.97;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 0.18;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 1.52;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 0.052;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 0.66;}
          break;
          case 'CUP':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.042;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.039;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.034;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 0.79;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 5.42;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 5.56;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 8.43;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 0.29;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 3.66;}
          break;
          case 'ARS':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.0049;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.0047;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.0041;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 0.14;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 0.93;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 0.66;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 0.12;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 0.034;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 0.43;}
          break;
          case 'CNH':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.15;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.14;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.12;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 2.74;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 18.86;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 19.37;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 3.48;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 29.37;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad * 12.76;}
          break;
          case 'AFN':
          if(this.quiero=='USD')
          {this.total=this.cantidad * 0.011;}
          if(this.quiero=='EUR')
          {this.total=this.cantidad * 0.011;}
          if(this.quiero=='LIBRA')
          {this.total=this.cantidad * 0.0094;}
          if(this.quiero=='MXN')
          {this.total=this.cantidad * 0.22;}
          if(this.quiero=='KES')
          {this.total=this.cantidad * 1.48;}
          if(this.quiero=='Yenn')
          {this.total=this.cantidad * 1.52;}
          if(this.quiero=='CUP')
          {this.total=this.cantidad * 0.27;}
          if(this.quiero=='ARS')
          {this.total=this.cantidad * 2.30;}
          if(this.quiero=='CNH')
          {this.total=this.cantidad * 0.078;}
          if(this.quiero=='AFN')
          {this.total=this.cantidad;}
          break;
    }
  }
}
