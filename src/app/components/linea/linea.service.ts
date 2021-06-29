import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LineaService {

  total:number = 0;

  datosParaGrafico:Dato[] = [
    { mes:"Enero",
      movil:100,
      trayectoria:120,
      salud:800,
      comercio:400
    },
    { mes:"Febrero",
      movil:360,
      trayectoria:220,
      salud:550,
      comercio:410
    },
    { mes:"Marzo",
      movil:30,
      trayectoria:400,
      salud:700,
      comercio:400
    }
  ];

  // datos a graficar
  private data:number[] = [300, 500, 100, 200]; 

  // meses
  private meses:string[] = ["Enero", "Febrero", "Marzo"];


  constructor() {
    console.log("Servicio listo !!")
  }

  // Retorna arreglo de objetos Dato
  getDatos() {
    return this.datosParaGrafico;
  }

}


export interface Dato {
  mes:string;
  movil:number;
  trayectoria:number;
  salud:number;
  comercio:number;
}

export interface datoComercio {
  fecha:string;
  nombre:string;
  importe:number;
  descuento:number;
  cupon:number;
}
