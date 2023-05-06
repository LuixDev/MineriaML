
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  constructor(private http: HttpClient
    ) { }

  
  
  title = 'Cantidad de alcohol en vino rojo';
  chart: any;

  ngOnInit() {
    this.http.get('https://mineriaml.onrender.com/alcohol').subscribe((data: any) => {
      const alcohol = parseInt(data.alcohol);
      console.log(alcohol);
      this.http.get('https://mineriaml.onrender.com/quality').subscribe((data: any) => {
        const quality = data.quality;
        console.log( quality);

        // Datos para la gráfica
        const chartLabels = ['Alcohol', 'Calidad'];
        const chartData = [alcohol, quality];

        // Crear la instancia de la gráfica
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: chartLabels,
            datasets: [
              {
                label: 'Alcohol, Calidad',
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
                label: 'Vino rojo',
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
                label: 'Vino rojo',
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
                label: 'Vino rojo',
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
                label: 'Vino rojo',
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
                label: 'Vino rojo',
                data: chartData, 
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
              }
            ]
          },
         
        });


      });
      
    });
     
   
  
  }
  options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  
}