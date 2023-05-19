import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component'
import {AdminComponent} from './admin/admin.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {Dasboard1Component} from './dasboard1/dasboard1.component'
import {GestionComponent} from './gestion/gestion.component'
import {ReporteComponent} from './reporte/reporte.component'


const routes: Routes = [

  { path: 'menu', component: MenuComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard1', component: Dasboard1Component },
  { path: 'gestion', component: GestionComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
