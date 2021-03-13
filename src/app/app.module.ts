import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services 
import { MessageService } from "./services/message.service";

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component';
import { HomeComponent } from './views/home/home.component';


import { ContactoComponent } from './views/contacto/contacto.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { AvisoLegalComponent } from './views/aviso-legal/aviso-legal.component';
import { CreditosComponent } from './views/creditos/creditos.component';
import { MapaDelSitioComponent } from './views/mapa-del-sitio/mapa-del-sitio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CallToActionComponent } from './components/shared/call-to-action/call-to-action.component';
import { ClientsComponent } from './components/shared/clients/clients.component';
import { CorporativeBarComponent } from './components/shared/corporative-bar/corporative-bar.component';
import { ServicesLinksComponent } from './components/shared/services-links/services-links.component';
import { FabricacionComponent } from './views/fabricacion/fabricacion.component';
import { MaquinariaDeLimpiezaComponent } from './views/fabricacion/maquinaria-de-limpieza/maquinaria-de-limpieza.component';
import { MaquinariaDescontaminacionAireComponent } from './views/fabricacion/maquinaria-descontaminacion-aire/maquinaria-descontaminacion-aire.component';
import { MaquinariaDeDestilacionComponent } from './views/fabricacion/maquinaria-de-destilacion/maquinaria-de-destilacion.component';
import { DesarrolloComponent } from './views/desarrollo/desarrollo.component';
import { ServicioTecnicoComponent } from './views/servicio-tecnico/servicio-tecnico.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    CookiesComponent,
    AvisoLegalComponent,
    CreditosComponent,
    MapaDelSitioComponent,
    FooterComponent,
    CallToActionComponent,
    ClientsComponent,
    CorporativeBarComponent,
    ServicesLinksComponent,
    ContactFormComponent,
    FabricacionComponent,
    MaquinariaDeLimpiezaComponent,
    MaquinariaDescontaminacionAireComponent,
    MaquinariaDeDestilacionComponent,
    DesarrolloComponent,
    ServicioTecnicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
