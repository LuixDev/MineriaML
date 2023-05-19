import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit() {}

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  async enviar() {
    const credentials = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://127.0.0.1:5000/enviar', credentials).subscribe(
      async (response: any) => {
          localStorage.setItem('token', response.token);
          alert("se ha enviado el mensaje");
        
      },
      async error => {
        this.toastr.error(
          'Error al intentar iniciar sesión',
          'Error',
          {
            timeOut: 3000
          }
        );
      }
    );
  }
}

  