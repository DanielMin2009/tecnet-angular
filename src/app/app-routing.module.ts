import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { AvisoLegalComponent } from './views/aviso-legal/aviso-legal.component';
import { CreditosComponent } from './views/creditos/creditos.component';
import { MapaDelSitioComponent } from './views/mapa-del-sitio/mapa-del-sitio.component';
import { FabricacionComponent } from './views/fabricacion/fabricacion.component';
import { MaquinariaDeLimpiezaComponent } from './views/fabricacion/maquinaria-de-limpieza/maquinaria-de-limpieza.component';
import { MaquinariaDescontaminacionAireComponent } from './views/fabricacion/maquinaria-descontaminacion-aire/maquinaria-descontaminacion-aire.component';
import { MaquinariaDeDestilacionComponent } from './views/fabricacion/maquinaria-de-destilacion/maquinaria-de-destilacion.component';
import { DesarrolloComponent } from './views/desarrollo/desarrollo.component';
import { ServicioTecnicoComponent } from './views/servicio-tecnico/servicio-tecnico.component';




const ROUTES: Routes = [
  { path: "", component: HomeComponent },

  { path: "fabricacion-de-maquinaria", component: FabricacionComponent },
  { path: "fabricacion/maquinaria-de-limpieza", component: MaquinariaDeLimpiezaComponent },
  { path: "fabricacion/maquinaria-de-destilacion", component: MaquinariaDeDestilacionComponent },
  { path: "fabricacion/maquinaria-de-descontaminacion-de-aire", component: MaquinariaDescontaminacionAireComponent },

  { path: "desarrollo-industrial", component: DesarrolloComponent },
  { path: "servicio-tecnico-industrial", component: ServicioTecnicoComponent },

  { path: "contacto", component: ContactoComponent },
  { path: "cookies", component: CookiesComponent },
  { path: "aviso-legal", component: AvisoLegalComponent },
  { path: "creditos", component: CreditosComponent },
  { path: "mapa-del-sitio", component: MapaDelSitioComponent },
  { path: "**", pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
