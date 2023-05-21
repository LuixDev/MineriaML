import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




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
export class GestionComponent  {
  selectedFile: File | null;
  miObjeto: MiObjeto[] = [];
  text1: string = '';
 
  contactos: any[] = []; 
  
  constructor(private http: HttpClient,private router: Router
    ) { 
      this.selectedFile = null;
     
      
    }

  ngOnInit(): void {
    this.http.get<MiObjeto[]>('https://mineriaml.onrender.com/consultar').subscribe(
      (data) => {
        this.miObjeto = data;
        console.log(data);
        
       
      
      
      },
      (error) => {
        console.error(error);
      }
    );

    
      this.http.get<any[]>('https://mineriaml.onrender.com/getn').subscribe(
        (data) => {
          this.contactos = data;
          console.error(data);
        },
        (error) => {
          console.error(error);
        }
      );
    
  }
  responder: string[] = [];
  deleteNotification(id: number,index: number, email: string): void {
    const url = `https://mineriaml.onrender.com/eliminar`;
    const body = { id: id, responder: this.responder[index], email: email };

    this.http.post(url, body).subscribe(
      (data) => {
        alert(data);
        
      },
    
    );
  }
 

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
 
  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('text1', this.text1); 
  
      this.http.post('https://mineriaml.onrender.com/predecir', formData)
        .subscribe(response => {
          alert("Tu resultado puede ver tambien en consola inpeccion web")
          alert(JSON.stringify(response)); // Recibe la respuesta del servidor
          console.log(response)
        });
    }
  }
 
}