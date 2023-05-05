import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';





interface MiObjeto {

  
  "fixed acidity": string;
  "volatile acidity": string;
  "citric acid": string;
  "residual sugar": string;
  chlorides: string;
  "free sulfur dioxide": string;
  "total sulfur dioxide": string; 
  density: string;
  pH: string;
  sulphates: string;
  alcohol: string;
  quality: string;
 
}


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  miObjeto: MiObjeto[] = [];

  constructor(private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get<MiObjeto[]>('http://127.0.0.1:5000/consultar').subscribe(
      (data) => {
        this.miObjeto = data;
        console.log(data);
        
       
      
      
      },
      (error) => {
        console.error(error);
      }
    );

    
  }

  mensaje: string = '';


  
  async predecir() {
    const credentials = {
      mensaje: this.mensaje,
      
    };

    
    this.http.post('http://127.0.0.1:5000/predecir', credentials).subscribe(
      (response: any) => {
        
        alert(JSON.stringify(response)); 
         
        
      },
      (error) => {
        console.error('Error en la solicitud HTTP:', error);
        alert('Error en la solicitud HTTP');
      }
    );
  }
}