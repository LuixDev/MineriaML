import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { GestionComponent } from './gestion/gestion.component';
import { ReporteComponent } from './reporte/reporte.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dasboard1Component } from './dasboard1/dasboard1.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    AdminComponent,
    GestionComponent,
    ReporteComponent,
    Dasboard1Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
