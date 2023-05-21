
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dasboard1.component.html',
  styleUrls: ['./dasboard1.component.css']
})


export class Dasboard1Component implements OnInit {


  constructor(private http: HttpClient
    ) { }

  
  
  title = 'Dato de sobrevivencia';
  chart: any;

  ngOnInit() {
    this.http.get('https://mineriaml.onrender.com/survived').subscribe((data: any) => {
      
      console.log(data);
      this.http.get('https://mineriaml.onrender.com/age').subscribe((data1: any) => {
       
        this.http.get('https://mineriaml.onrender.com/psa').subscribe((data2: any) => {
        
        console.log(data2);


        
        const chartLabels = ['Sobrevivio', 'Edad', 'Total_pasajero'];
 
   
        const chartData = [data,data1,data2];

        // Crear la instancia de la gráfica
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Sobrevivio, Edad ,Total_pasajero',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });
      
        this.chart = new Chart('canvas2', {
          type: 'doughnut',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Sobrevivio, Edad ,Total_pasajero',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });

        this.chart = new Chart('canvas3', {
          type: 'pie',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Sobrevivio, Edad ,Total_pasajero',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });

        this.chart = new Chart('canvas4', {
          type: 'line',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Sobrevivio, Edad ,Total_pasajero',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });

        this.chart = new Chart('canvas5', {
          type: 'radar',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Sobrevivio, Edad ,Total_pasajero',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });

        this.chart = new Chart('canvas6', {
          type: 'polarArea',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'VSobrevivio, Edad ,Total_pasajero',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });


      });
    });
    });
     
   
  
  }
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          autoSkip: false // Evita saltar las etiquetas en el eje X
        }
      }]
    }
  }
 

}