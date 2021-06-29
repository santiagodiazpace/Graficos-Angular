import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

import { LineaService, Dato } from './linea.service';


@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})

export class LineaComponent implements OnInit {

  data:number[] = [0,0,0,0];           // valores a graficar
  totalData:number = 0;         // valor total
  meses:string[] = [];

  datosGrafico:Dato[] = [];
  datoSeleccionado:Dato = {
    mes: "0",
    movil: 0,
    trayectoria: 0,
    salud: 0,
    comercio: 0
  };

  mesSeleccionado: string  = '0';   // Inicio


  // Pie chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
/*     plugins: {
      datalabels: {
        formatter: (value: any, ctx: { chart: { data: { labels: { [x: string]: any; }; }; }; dataIndex: string | number; }) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    } */
  };
  public pieChartLabels: Label[] = ['Siempre Movil', 'Trayectoria', 'Fava Salud', 'Comercios Adheridos'];
  public pieChartData: number[] = this.data;    // valores a graficar
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(255,100,255,0.3)'],  // Sino asigna por defecto
    },
  ];



  constructor ( private _lineaService:LineaService ) { 

  }

  ngOnInit(): void {

    this.datosGrafico = this._lineaService.getDatos();


    this.pieChartData = this.data; 
    console.log("Data: " + this.data);

  }


  // segun mes seleccionado

  capturar() {        

    // Set datoSeleccionado
    for ( let dato of this.datosGrafico ) {
      if ( dato.mes == this.mesSeleccionado ) {
        this.datoSeleccionado.mes = dato.mes;
        this.datoSeleccionado.movil = dato.movil;
        this.datoSeleccionado.trayectoria = dato.trayectoria;
        this.datoSeleccionado.salud = dato.salud;
        this.datoSeleccionado.comercio = dato.comercio;
      }
    }

    // Consola
    console.clear();
    console.log("Mes: " + this.datoSeleccionado.mes);
    console.log("Movil: " + this.datoSeleccionado.movil);
    console.log("Trayectoria: " + this.datoSeleccionado.trayectoria);
    console.log("Salud: " + this.datoSeleccionado.salud);
    console.log("Comercio: " + this.datoSeleccionado.comercio);

    // Set data para graficar
    this.data = [];
    this.data.push(this.datoSeleccionado.movil);
    this.data.push(this.datoSeleccionado.trayectoria);
    this.data.push(this.datoSeleccionado.salud);
    this.data.push(this.datoSeleccionado.comercio);
    this.pieChartData = this.data; 

    this.totalData = this.getTotalBeneficios(this.datoSeleccionado);
    console.log("Total beneficios: " + this.totalData);

  }
  
  getTotalBeneficios(dato:Dato) {
    return (dato.movil + dato.trayectoria + dato.salud + dato.comercio);
  }

}
